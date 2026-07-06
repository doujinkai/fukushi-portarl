document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const formData = {
            name: form.name.value.trim(),
            kana: form.kana.value.trim(),
            zipcode: form.zipcode.value.trim(),
            tel: form.tel.value.trim(),
            email: form.email.value.trim(),
            facility: form.facility.value,
            message: form.message.value.trim()
        };

        if (!formData.name || !formData.tel || !formData.facility || !formData.message) {
            alert("必須項目を入力してください");
            return;
        }

        if (!confirm("この内容で送信しますか？")) {
            return;
        }

        // 👇ここがポイント（GASのURL）
        const GAS_URL = "https://script.google.com/macros/s/AKfycbz16moF5NxY_O5MRkOExwqhGrpkzW-werngCjPsR8s0lmAKJMl4JnQ-rSLtwMDOWLM-/exec";

        fetch(GAS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.text())
        .then(data => {

            alert("送信が完了しました");

            form.reset();

            console.log("GASレスポンス:", data);

        })
        .catch(error => {

            console.error(error);
            alert("送信に失敗しました");

        });

    });

});
