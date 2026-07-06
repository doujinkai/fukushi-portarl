document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault(); // ページリロード防止

        // フォームデータ取得
        const formData = {
            name: form.name.value.trim(),
            kana: form.kana.value.trim(),
            zipcode: form.zipcode.value.trim(),
            tel: form.tel.value.trim(),
            email: form.email.value.trim(),
            facility: form.facility.value,
            message: form.message.value.trim()
        };

        // 簡易チェック（必須項目）
        if (!formData.name || !formData.tel || !formData.facility || !formData.message) {
            alert("必須項目を入力してください");
            return;
        }

        // 確認表示（現段階はテスト）
        const confirmText =
            "以下の内容で送信準備します\\n\\n" +
            "氏名：" + formData.name + "\\n" +
            "電話：" + formData.tel + "\\n" +
            "施設：" + formData.facility + "\\n\\n" +
            "送信してよろしいですか？";

        if (!confirm(confirmText)) {
            return;
        }

        // 今はまだ送信しない（次でGAS接続）
        console.log("送信データ:", formData);

        alert("送信準備完了（次のステップでメール送信を実装します）");

    });

});
