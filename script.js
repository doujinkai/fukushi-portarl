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


        // 必須チェック

        if (
            !formData.name ||
            !formData.tel ||
            !formData.facility ||
            !formData.message
        ) {

            alert("必須項目を入力してください");
            return;

        }


        if (!confirm("この内容で送信しますか？")) {

            return;

        }


        // ★ここにGASウェブアプリURLを貼る

        const GAS_URL =
            "https://script.google.com/macros/s/AKfycbz16moF5NxY_O5MRkOExwqhGrpkzW-werngCjPsR8s0lmAKJMl4JnQ-rSLtwMDOWLM-/exec";



        fetch(GAS_URL, {

            method: "POST",

            body: JSON.stringify(formData)

        })


        .then(function(response) {

            return response.text();

        })


        .then(function(result) {


            console.log("GAS結果:", result);


            if (result === "success") {

                alert("送信しました");

                form.reset();

            } else {

                alert("送信処理でエラーが発生しました");

                console.log(result);

            }


        })


        .catch(function(error) {


            console.error("通信エラー:", error);


            alert(
                "送信に失敗しました\n" +
                error
            );


        });


    });


});
