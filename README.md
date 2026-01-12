# Öğrenci Yönetim Paneli

Öğrenci: Hozrifa shekhani 220404941

---

## 📋 Proje Hakkında

Bu proje, React ve Vite kullanılarak geliştirilmiş modern bir öğrenci yönetim paneline sahip web uygulamasıdır. Uygulama, öğrenci bilgilerini ekleme, filtreleme, arama ve sıralama gibi temel CRUD işlemlerini gerçekleştirmenize olanak tanır.

## ✨ Özellikler

- **Öğrenci Ekleme:** Yeni öğrenci kayıtları oluşturma (isim ve not bilgisi ile)
- **Filtreleme:** Öğrencileri tümü, geçenler (≥60) ve kalanlar (<60) olarak filtreleme
- **Arama:** Öğrenci isimlerine göre anlık arama yapma
- **Sıralama:** Notlara göre yüksekten düşüğe veya düşükten yükseğe sıralama
- **Silme:** Öğrenci kayıtlarını silme
- **Modern UI:** Kullanıcı dostu ve responsive tasarım

## 🛠️ Teknolojiler

- **React 19.1.1** - Kullanıcı arayüzü kütüphanesi
- **Vite 7.1.7** - Hızlı geliştirme ortamı ve build aracı
- **ESLint** - Kod kalitesi ve standart kontrolü
- **SWC** - Hızlı derleme ve hot module replacement

## 📦 Kurulum

Projeyi klonladıktan sonra, aşağıdaki adımları izleyin:

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Uygulama varsayılan olarak `http://localhost:5173` adresinde çalışacaktır.

## 🚀 Kullanım

### Geliştirme Modu

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Build Önizleme

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 📁 Proje Yapısı

```
student-dashboard/
├── src/
│   ├── components/
│   │   ├── StudentForm.jsx      # Öğrenci ekleme formu
│   │   ├── StudentControls.jsx  # Filtre, arama ve sıralama kontrolleri
│   │   ├── StudentItem.jsx      # Tek öğrenci kartı bileşeni
│   │   └── StudentList.jsx      # Öğrenci listesi bileşeni
│   ├── styles/
│   │   └── lab-styles.css       # Uygulama stilleri
│   ├── App.jsx                  # Ana uygulama bileşeni
│   └── main.jsx                 # Uygulama giriş noktası
├── public/                      # Statik dosyalar
├── package.json                 # Proje bağımlılıkları
└── vite.config.js               # Vite yapılandırması
```

## 🎯 Bileşenler

### StudentForm
Öğrenci ekleme formu. Yeni öğrenci ismi ve notu girişi yapılır.

### StudentControls
- Filtreleme seçenekleri (Tümü, Geçenler, Kalanlar)
- Arama kutusu
- Sıralama butonu (Yüksekten Düşüğe / Düşükten Yükseğe)

### StudentList
Filtrelenmiş ve sıralanmış öğrenci listesini gösterir. Her öğrenci kartında silme butonu bulunur.

### StudentItem
Tek bir öğrenci bilgisini gösteren kart bileşeni.

## 📝 Notlar

- Geçme notu: 60
- Öğrenci ID'leri otomatik olarak oluşturulur
- Arama işlemi büyük/küçük harf duyarsızdır
- Sıralama işlemi anlık olarak gerçekleşir

## 🔧 Geliştirme

Bu proje, React'in modern özelliklerini kullanır:
- **Hooks:** `useState`, `useMemo`
- **Component-based Architecture:** Modüler ve yeniden kullanılabilir bileşenler
- **Performance Optimization:** `useMemo` ile hesaplamalı optimizasyon

## 📄 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

---

**Geliştirici:** Muhammed Hazem Kabbanı  
**Tarih:** 2024
