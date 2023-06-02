---
title: 'Voice Asisstant'
image: '/voice-assistant/article.webp'
created: 2023-04-08
updated: 2021-12-12
tags:
  - 'AI'
  - 'Automation'
  - 'Project'
---

Fitur dari Voice Asisstant Ini:
- Navigasi:
    - Membuka, dan keluar folder.
    - Search File.
    - Copy, dan paste file.

- Video:
    - Memainkan video.
    - Mengunduh video.
    - Memotong video.

- Bahasa:
    - [Bahasa Indonesia](#membuat-va-support-bahasa-indonesia).


### **Membuat VA support bahasa Indonesia**
___

Untuk membuat fitur ini, saya menggunakan transformer model [Wav2Vec2-Large-XLSR-Indonesian](https://huggingface.co/indonesian-nlp/wav2vec2-large-xlsr-indonesian) yang merupakan fine-tuned dari [facebook/wav2vec2-large-xlsr-53](https://huggingface.co/facebook/wav2vec2-large-xlsr-53)  menggunakan dataset [Indonesian Common Voice dataset](https://huggingface.co/datasets/common_voice). Pada model ini, suara harus berkisar 16 KHz. Model dijalankan menggunakan library 'Hugging face Transformers' secara offline. Panduan untuk membuat inference offline dapat dilihat [disini](https://9to5tutorial.com/using-huggingface-transformers-models-offline) atau dari [official](https://huggingface.co/docs/transformers/installation).

Masalah lain yang dapat terjadi adalah mispelling, sehingga dibutuhkan [Approximate string matching](https://en.wikipedia.org/wiki/Approximate_string_matching). 

Referensi untuk [semantic similarity](https://towardsdatascience.com/deep-learning-for-semantic-text-matching-d4df6c2cf4c5)



|![](va@support_bahasa_indonesia.png)| 
|:--:|
|<b>Gambar 2</b>. Arsitektur AI Support Bahasa Indonesia

### **Memainkan Video**
___

