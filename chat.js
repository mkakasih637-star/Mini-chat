const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");

function sendMessage() {
  const msg = input.value.trim();
  if (msg === "") return;

  addMessage(msg, "user");
  input.value = "";

  // Bot delay biar kayak manusia ngetik
  setTimeout(() => {
    botReply(msg);
  }, 700);
}

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.classList.add("message", sender);
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(userMsg) {
  let reply = "";
  const msg = userMsg.toLowerCase();

  // =====================
  // 🔹 Kumpulan respon
  // =====================

  if (msg.includes("hai") || msg.includes("halo") || msg.includes("hei")) {
    reply = "Hai juga! 👋 Lagi ngapain nih?";
  }

  else if (msg.includes("pagi")) {
    reply = "Selamat pagi 🌞 semoga harimu lancar ya!";
  }

  else if (msg.includes("siang")) {
    reply = "Selamat siang ☀️, jangan lupa makan siang ya!";
  }

  else if (msg.includes("malam")) {
    reply = "Selamat malam 🌙 waktunya santai~";
  }

  else if (msg.includes("kabar")) {
    reply = "Aku baik kok 😁 kamu gimana? Lagi semangat nggak hari ini?";
  }

  else if (msg.includes("baik")) {
    reply = "Syukurlah 😄 semoga selalu dalam mood bagus ya!";
  }

  else if (msg.includes("siapa kamu")) {
    reply = "Aku mini bot buatan M Latief 🤖. Asisten kecil yang siap nemenin ngobrol.";
  }

  else if (msg.includes("nama kamu")) {
    reply = "Namaku MiniBot 🤖. Nama kamu siapa?";
  }

  else if (msg.includes("nama saya") || msg.includes("gue") || msg.includes("aku")) {
    reply = "Nice to meet you 😎, senang bisa ngobrol sama kamu!";
  }

  else if (msg.includes("umur") || msg.includes("umur kamu")) {
    reply = "Umurku nggak diitung pake tahun, tapi versi 😂. Sekarang aku versi 2.0.";
  }

  else if (msg.includes("makasih") || msg.includes("terima kasih")) {
    reply = "Sama-sama 😁 senang bisa bantu!";
  }

  else if (msg.includes("maaf")) {
    reply = "Gak papa kok 😌 yang penting kamu udah sadar hehe.";
  }

  else if (msg.includes("bosen") || msg.includes("gabut")) {
    reply = "Lagi gabut ya? 😅 Coba nonton video lucu atau belajar skill baru, biar produktif 💪";
  }

  else if (msg.includes("saran") || msg.includes("tips")) {
    reply = "Saran? Hmm... coba atur waktu kamu, 1 jam buat belajar hal baru tiap hari 💡";
  }

  else if (msg.includes("cuaca")) {
    reply = "Kalau di sini sih cerah 🌤️, semoga di tempatmu juga ya!";
  }

  else if (msg.includes("ngantuk")) {
    reply = "Tidur bentar gapapa 😴, yang penting jangan lupa bangun lagi buat lanjut semangat 💪";
  }

  else if (msg.includes("capek") || msg.includes("lelah")) {
    reply = "Istirahat bentar gak dosa 😌 minum air putih, tarik napas, reset otakmu ✨";
  }

  else if (msg.includes("makan")) {
    reply = "Makan tuh penting! 🍚 Jangan kebanyakan ngoding sampe lupa makan 😆";
  }

  else if (msg.includes("belajar")) {
    reply = "Belajar itu proses bro 🔥 yang penting konsisten dikit-dikit tiap hari.";
  }

  else if (msg.includes("ngoding") || msg.includes("coding")) {
    reply = "Mantap! 👨‍💻 Dunia coding tuh luas banget, kamu belajar apa sekarang?";
  }

  else if (msg.includes("python")) {
    reply = "Python? 😎 Bahasa paling santai tapi kuat banget buat AI & otomasi.";
  }

  else if (msg.includes("ai") || msg.includes("artificial intelligence")) {
    reply = "AI itu masa depan bro 🤖! Kalau kamu belajar dari sekarang, kamu menang start!";
  }

  else if (msg.includes("love") || msg.includes("sayang")) {
    reply = "Eaa... 😳 kamu mulai baper nih? Haha, aku gak bisa pacaran, tapi bisa nemenin ngobrol 😁";
  }

  else if (msg.includes("lucu")) {
    reply = "Hehe, makasih 🥰 aku berusaha biar obrolan kita gak kaku~";
  }

  else if (msg.includes("bye") || msg.includes("dadah") || msg.includes("sampai jumpa")) {
    reply = "Dadah 👋 semoga harimu menyenangkan ya!";
  }

  else if (msg.includes("kenalan")) {
    reply = "Boleh banget 😄 aku MiniBot, suka ngobrol santai sama manusia produktif!";
  }

  else if (msg.includes("apa kabar bot")) {
    reply = "Aku baik kok 🤖 semoga kamu juga semangat terus ya!";
  }

  else if (msg.includes("motivasi")) {
    const quotes = [
      "Jangan tunggu siap, baru mulai. Mulailah, baru kamu siap 💪",
      "Orang sukses gak selalu pintar, tapi mereka *konsisten*! 🔥",
      "Kegagalan itu bukan akhir, tapi batu loncatan ke arah yang bener 🚀",
      "Yang penting gerak, sekecil apapun progressnya ⚡"
    ];
    reply = quotes[Math.floor(Math.random() * quotes.length)];
  }

  else if (msg.includes("kenapa") || msg.includes("mengapa")) {
    reply = "Pertanyaan bagus 🤔 tapi kadang gak semua hal perlu dijawab, cukup dijalani.";
  }

  else {
    reply = "Hmm... aku belum paham maksudmu 😅 coba ketik hal lain kayak 'motivasi', 'kabar', atau 'ngoding'.";
  }

  addMessage(reply, "bot");
}