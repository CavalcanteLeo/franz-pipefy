'use strict';

module.exports = Franz => {
  const getMessages = function getMessages() {
    const notif = document.getElementById("notifications_button");
    let hasNotification = notif.classList.contains('pp-active')
    Franz.setBadge(0, hasNotification ? parseInt( notif.innerHTML ) : 0);
  };

  Franz.loop(getMessages);
};
