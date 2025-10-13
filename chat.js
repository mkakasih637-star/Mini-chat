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
  
  // Kalau user nanya kabar
else if (msg.includes("kabar")) {
  reply = "Aku baik kok 😁 kamu sendiri gimana? Lagi semangat gak hari ini?";
}

// Kalau user nyapa
else if (msg.includes("hai") || msg.includes("halo") || msg.includes("hello")) {
  reply = "Haiii 😄 apa kabar nih? Udah minum air putih belum hari ini?";
}

// Kalau user bilang terima kasih
else if (msg.includes("makasih") || msg.includes("terima kasih")) {
  reply = "Sama-sama dong 😎, seneng bisa bantu kamu!";
}

// Kalau user bilang lagi bosen
else if (msg.includes("bosen") || msg.includes("bosan")) {
  reply = "Wah jangan bosen dong 😅 coba dengerin lagu atau scroll meme dulu biar fresh!";
}

// Kalau user bilang lagi capek
else if (msg.includes("capek") || msg.includes("lelah")) {
  reply = "Istirahat bentar ya 😌 hidup gak harus ngebut terus kok, yang penting tetep waras 😆";
}

// Kalau user bilang lapar
else if (msg.includes("lapar")) {
  reply = "Makan dulu dong 😋 perut kosong bikin susah mikir, nanti jadi overthinking wkwk";
}

// Kalau user bilang ngantuk
else if (msg.includes("ngantuk") || msg.includes("tidur")) {
  reply = "Waduh, tidur aja gih 😴 biar besok bangun langsung fresh dan siap tempur!";
}

// Kalau user bilang lagi sedih
else if (msg.includes("sedih") || msg.includes("down")) {
  reply = "Hei, gapapa kok 😢 semua orang pernah ngerasa gitu. Tapi inget, kamu kuat banget 💪";
}

// Kalau user bilang lagi senang
else if (msg.includes("senang") || msg.includes("happy")) {
  reply = "Asiiikk 😍 seneng dengernya! Bagi dikit dong energi positifnya hehe~";
}

// Kalau user bilang cinta/pacar
else if (msg.includes("cinta") || msg.includes("sayang") || msg.includes("pacar")) {
  reply = "Eaaa 😏 lagi jatuh cinta ya? Hati-hati, tapi nikmatin aja prosesnya~ 💕";
}

// Kalau user bilang lagi belajar
else if (msg.includes("belajar") || msg.includes("tugas")) {
  reply = "Semangat ya belajarnya 📚 jangan lupa istirahat, otak juga butuh healing 😆";
}

// Kalau user bilang lagi gabut
else if (msg.includes("gabut")) {
  reply = "Gabut? 😅 scrolling TikTok lagi ya? Coba cari hal baru deh biar gak boring!";
}

// Kalau user bilang lagi mager
else if (msg.includes("mager")) {
  reply = "Mager emang penyakit sejuta umat 😆 tapi inget, dikit-dikit gerak yuk biar gak stuck!";
}

// Kalau user bilang lagi stres
else if (msg.includes("stres") || msg.includes("stress")) {
  reply = "Santai bro 😌 ambil napas dulu, hidup gak harus dipikirin semua sekaligus. Pelan-pelan aja 💆‍♂️";
}

// Kalau user bilang bye
else if (msg.includes("bye") || msg.includes("dadah")) {
  reply = "Dadah 👋 jaga diri ya, semoga harimu menyenangkan!";
}

// Kalau user bilang hehehe / wkwkwk
else if (msg.includes("wkwk") || msg.includes("haha") || msg.includes("hehe")) {
  reply = "Hahaha 😆 emang lucu sih, tapi jangan kebanyakan ketawa ntar pipi pegel 😂";
}

// ====== KABAR ======
else if (msg.includes("kabar")) {
  reply = "Aku baik kok 😁 kamu gimana? Lagi semangat gak hari ini?";
}

// ====== SAPAAN ======
else if (msg.includes("hai") || msg.includes("halo") || msg.includes("hello")) {
  reply = "Haii 😄 apa kabar nih? Udah ngopi belum?";
}

// ====== TERIMA KASIH ======
else if (msg.includes("makasih") || msg.includes("terima kasih")) {
  reply = "Sama-sama dong 😎 seneng bisa bantu kamu!";
}

// ====== BOSEN ======
else if (msg.includes("bosen") || msg.includes("bosan")) {
  reply = "Wah jangan bosen dong 😅 coba nonton YouTube, denger lagu, atau curhat sini aja~";
}

// ====== CAPEK ======
else if (msg.includes("capek") || msg.includes("lelah")) {
  reply = "Istirahat dulu ya 😌 jangan maksa diri, kamu juga butuh recharge!";
}

// ====== LAPAR ======
else if (msg.includes("lapar")) {
  reply = "Waduh, makan dulu gih 😋 perut kosong bikin bad mood loh!";
}

// ====== NGANTUK ======
else if (msg.includes("ngantuk") || msg.includes("tidur")) {
  reply = "Tidur gih 😴 biar besok bangun langsung ganteng/cantik + semangat!";
}

// ====== SEDIH ======
else if (msg.includes("sedih") || msg.includes("down")) {
  reply = "Heyy, gapapa kok 😢 semua orang pernah ngerasa gitu. Tapi kamu kuat 💪";
}

// ====== SENANG ======
else if (msg.includes("senang") || msg.includes("happy")) {
  reply = "Asiikk 😍 ikut seneng deh denger kabar kamu bahagia!";
}

// ====== CINTA / PACAR ======
else if (msg.includes("cinta") || msg.includes("sayang") || msg.includes("pacar")) {
  reply = "Waduhhh 😏 lagi jatuh cinta nih ya? Jangan baperan ya wkwk 💕";
}

// ====== BELAJAR ======
else if (msg.includes("belajar") || msg.includes("tugas")) {
  reply = "Semangat ya belajarnya 📚 jangan lupa minum air biar otak encer hehe~";
}

// ====== GABUT ======
else if (msg.includes("gabut")) {
  reply = "Gabut? 😅 scrolling TikTok lagi ya? Coba cari ide random deh biar gak boring!";
}

// ====== MAGER ======
else if (msg.includes("mager")) {
  reply = "Mager emang penyakit sejuta umat 😆 tapi dikit-dikit gerak yuk biar gak nyesel!";
}

// ====== STRES ======
else if (msg.includes("stres") || msg.includes("stress")) {
  reply = "Tarik napas dulu 😌 santai bro, semuanya bisa diselesain pelan-pelan.";
}

// ====== BYE ======
else if (msg.includes("bye") || msg.includes("dadah")) {
  reply = "Bye-bye 👋 hati-hati di jalan ya, jaga mood juga~";
}

// ====== KETAWA ======
else if (msg.includes("wkwk") || msg.includes("haha") || msg.includes("hehe")) {
  reply = "Hahaha 😂 lucu juga sih, tapi jangan kebanyakan ketawa, pipi bisa kram 😆";
}

// ====== GALAU ======
else if (msg.includes("galau")) {
  reply = "Duhhh 😢 galau tuh emang gak enak, tapi yakin deh nanti juga lewat kok!";
}

// ====== JOMBLO ======
else if (msg.includes("jomblo")) {
  reply = "Jomblo bukan dosa 😎 justru kesempatan upgrade diri dulu bro/sis~";
}

// ====== NONTON ======
else if (msg.includes("nonton")) {
  reply = "Nonton apa tuh? 🍿 bagi rekomendasi dong biar aku gak ketinggalan 😆";
}

// ====== MUSIK ======
else if (msg.includes("musik") || msg.includes("lagu")) {
  reply = "Wahh asik 🎧 musik emang obat dari segala mood buruk hehe~";
}

// ====== CUACA ======
else if (msg.includes("hujan") || msg.includes("panas") || msg.includes("cuaca")) {
  reply = "Cuacanya gini bikin mager ya 😅 tapi jangan lupa minum air biar gak dehidrasi~";
}

// ====== KERJA ======
else if (msg.includes("kerja") || msg.includes("ngantor")) {
  reply = "Kerja terus kayaknya 💼 jangan lupa istirahat ya, rehat juga penting!";
}

// ====== MAIN ======
else if (msg.includes("main") || msg.includes("game")) {
  reply = "Game emang seru sih 🎮 tapi inget, jangan lupa waktu wkwk~";
}

// ====== HEALING ======
else if (msg.includes("healing")) {
  reply = "Healing penting banget 😌 kadang bukan liburannya, tapi tenangnya yang kita butuhin.";
}

// ====== WEEKEND ======
else if (msg.includes("weekend") || msg.includes("libur")) {
  reply = "Yeaay 🎉 waktunya rebahan tanpa rasa bersalah!";
}

// ====== MONDAY ======
else if (msg.includes("senin")) {
  reply = "Senin oh Senin 😩 siap-siap ketemu realita lagi haha semangat!";
}

// ====== FRIDAY ======
else if (msg.includes("jumat")) {
  reply = "Akhirnya Jumat juga 😍 waktunya chill bentar sebelum weekend~";
}

// ====== NGODING ======
else if (msg.includes("ngoding") || msg.includes("coding")) {
  reply = "Wah, programmer nih 😎 semangat bug hunting-nya bro/sis!";
}

// ====== AI ======
else if (msg.includes("ai") || msg.includes("chatgpt")) {
  reply = "AI emang keren banget 🤖 tapi tetep, manusia yang punya hati ❤️";
}

// ====== NGOPI ======
else if (msg.includes("kopi") || msg.includes("ngopi")) {
  reply = "Wah tim ngopi nih ☕ hati-hati, kebanyakan kopi bisa bikin deg-degan~";
}

// ====== NGABARIN ======
else if (msg.includes("kangen") || msg.includes("rindu")) {
  reply = "Eaaa 😳 kangen siapa nih? atau cuma kangen masa lalu? 😅";
}

// ====== MAKAN ======
else if (msg.includes("makan")) {
  reply = "Makan tuh penting 🍱 jangan suka skip ya, nanti dikira diet sedih 😂";
}

// ====== NGELUH ======
else if (msg.includes("pusing") || msg.includes("cape") || msg.includes("kesel")) {
  reply = "Wajar kok 😌 hidup gak selalu mulus, yang penting kamu masih jalan terus 💪";
}

// ====== UANG ======
else if (msg.includes("duit") || msg.includes("uang")) {
  reply = "Duit emang penting 💸 tapi jangan lupa, kesehatan mental juga investasi 😎";
}

// ====== TEMAN ======
else if (msg.includes("teman") || msg.includes("sahabat")) {
  reply = "Temen tuh berharga banget 🫶 jangan lupa bilang makasih ke mereka hari ini!";
}

// ====== SEKOLAH ======
else if (msg.includes("sekolah") || msg.includes("kampus")) {
  reply = "Semangat sekolah/kuliahnya 🎓 masa depan gak akan datang kalau kita mager wkwk~";
}

// ====== MALAM ======
else if (msg.includes("malam")) {
  reply = "Selamat malam 🌙 jangan begadang mulu, nanti bangun kesiangan wkwk~";
}

// ====== PAGI ======
else if (msg.includes("pagi")) {
  reply = "Selamat pagi ☀️ semoga harimu lancar dan penuh vibes positif!";
}

// ====== SIANG ======
else if (msg.includes("siang")) {
  reply = "Siang-siang gini enaknya makan siang 😋 udah makan belum?";
}

// ====== SORE ======
else if (msg.includes("sore")) {
  reply = "Sore-sore gini vibes-nya chill banget 🌆 cocok buat minum es teh manis~";
}

// ====== MOTIVASI ======
else if (msg.includes("semangat")) {
  reply = "Yess 🔥 jangan nyerah ya, progress kecil tetap progress bro!";
}

// ====== THANK YOU ======
else if (msg.includes("thanks")) {
  reply = "No problem bro/sis 😎 keep being awesome!";
}

// ====== RANDOM CHAT ======
else if (msg.includes("apa kabar") || msg.includes("lagi apa")) {
  reply = "Lagi ngobrol sama kamu nih 😆 kamu sendiri lagi ngapain?";
}

// ====== DEFAULT ======
else {
  reply = "Hehe aku belum ngerti maksud kamu 😅 bisa ulangin dengan kata lain gak?";
}

  addMessage(reply, "bot");
}