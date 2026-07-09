document
  .getElementById("generate")
  .addEventListener("click", async () => {
    const status =
      document.getElementById("status");

    status.textContent = "Loading...";

    try {
      const response = await fetch(
        "https://dummyjson.com/quotes/random"
      );

      const data =
        await response.json();

      document.getElementById(
        "post"
      ).value = data.quote;

      status.textContent =
        "Success";
    } catch (e) {
      status.textContent =
        "Error fetching quote.";

      console.error(
        "Error fetching quote:",
        e.message
      );
    }
  });

document
  .getElementById("save")
  .addEventListener("click", async () => {
    const postContent =
      document.getElementById("post")
        .value;

    const status =
      document.getElementById("status");

    if (!postContent) {
      status.textContent =
        "No post to save.";
      return;
    }

    status.textContent =
      "Saving post...";

    try {
      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      status.textContent =
        "Post saved successfully!";
    } catch (e) {
      status.textContent =
        "Error saving post.";

      console.error(
        "Error saving post:",
        e.message
      );
    }
  });

let socket;

function connect() {
  socket = new WebSocket(
    "wss://api.whitebit.com/ws"
  );

  const currencyStatus =
    document.getElementById(
      "currency_status"
    );

  currencyStatus.textContent =
    "🟡 Connecting...";
  currencyStatus.className =
    "connecting";

  socket.onopen = () => {
    console.log(
      "Connected to Whitebit API"
    );

    currencyStatus.textContent =
      "🟢 Connected";
    currencyStatus.className =
      "connected";

    const message = {
      id: 1,
      method: "depth_subscribe",
      params: [
        "BTC_USDT",
        1,
        "0",
      ],
    };

    socket.send(
      JSON.stringify(message)
    );
  };

  socket.onmessage = (
    event
  ) => {
    const data = JSON.parse(
      event.data
    );

    console.log(data);

    if (
      data.method ===
        "depth_update" &&
      data.params &&
      data.params[1] &&
      data.params[1].bids &&
      data.params[1].bids.length > 0
    ) {
      const price = Number(
        data.params[1].bids[0][0]
      );

      const priceElement =
        document.getElementById(
          "price"
        );

      const trendElement =
        document.getElementById(
          "trend"
        );

      const oldPrice = Number(
        priceElement.textContent.substring(
          1
        )
      );

      if (oldPrice) {
        const isGrowing =
          price > oldPrice;

        trendElement.textContent =
          isGrowing
            ? "↑"
            : "↓";

        trendElement.className =
          isGrowing
            ? "connected"
            : "disconnected";
      }

      priceElement.textContent =
        `$${price}`;
    }
  };

  socket.onerror = (
    error
  ) => {
    console.error(
      "WebSocket error:",
      error
    );

    currencyStatus.textContent =
      "🔴 Error";
    currencyStatus.className =
      "disconnected";
  };

  socket.onclose = () => {
    currencyStatus.textContent =
      "🔴 Disconnected";

    currencyStatus.className =
      "disconnected";
  };
}

connect();