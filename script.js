document.addEventListener("DOMContentLoaded", function() {
    // Tüm resimlerin bulunduğu img etiketlerini seçiyoruz
    var images = document.querySelectorAll('.photos img');

    // Her bir resim için fare üstüne geldiğinde büyütme işlemini ekliyoruz
    images.forEach(function(img) {
        img.addEventListener('mouseover', function() {
            img.style.transform = 'scale(1.1)'; // Resmi 1.1 kat büyütüyoruz
            img.style.transition = 'transform 0.3s'; // Animasyon ekliyoruz
        });

        // Fare resmin üstünden ayrıldığında normal boyutuna dönmesini sağlıyoruz
        img.addEventListener('mouseout', function() {
            img.style.transform = 'scale(1)';
        });
    });
});



