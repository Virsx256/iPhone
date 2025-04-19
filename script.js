// إشعار بعدد الهواتف المتبقية
let remaining = 5;
const remainingDisplay = document.getElementById("remaining-count");
setInterval(() => {
    if (remaining > 1) {
        remaining--;
        remainingDisplay.textContent = `${remaining} أجهزة متبقية! أسرع!`;
    }
}, 5000);

// رسالة تأكيد وهمية بعد الضغط
document.getElementById("confirm-btn").addEventListener("click", () => {
    alert("تم تأكيد موقعك بنجاح! جارٍ معالجة طلبك...");
    setTimeout(() => {
        alert("تم إرسال طلبك! سنقوم بالتواصل معك قريبًا.");
    }, 3000);
});

// إشعار تلقائي بالمستخدمين الجدد
const notifications = [
    "محمد من القاهرة حصل على آيفون 13!",
    "سارة من طنطا أكدت موقعها!",
    "أحمد من الإسكندرية حصل على فرصة اليوم!",
];
setInterval(() => {
    const random = notifications[Math.floor(Math.random() * notifications.length)];
    const notifBox = document.createElement("div");
    notifBox.className = "fake-notification";
    notifBox.textContent = random;
    document.body.appendChild(notifBox);
    setTimeout(() => notifBox.remove(), 5000);
}, 8000);
