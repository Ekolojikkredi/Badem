// Sayfa yönetimi ve buton etkileşimleri
document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById('homeBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const contactBtn = document.getElementById('contactBtn');
    const registerBtn = document.getElementById('registerBtn');
    const dataEntryBtn = document.getElementById('dataEntryBtn');
    const viewDataBtn = document.getElementById('viewDataBtn');
    
    const homeContent = document.getElementById('homeContent');
    const aboutContent = document.getElementById('aboutContent');
    const contactContent = document.getElementById('contactContent');
    const registerContent = document.getElementById('registerContent');
    const dataEntryContent = document.getElementById('dataEntryContent');
    const viewDataContent = document.getElementById('viewDataContent');

    // Sayfa içeriklerini gizle ve göster
    function hideAllSections() {
        homeContent.classList.add('hidden');
        aboutContent.classList.add('hidden');
        contactContent.classList.add('hidden');
        registerContent.classList.add('hidden');
        dataEntryContent.classList.add('hidden');
        viewDataContent.classList.add('hidden');
    }

    homeBtn.addEventListener('click', () => {
        hideAllSections();
        homeContent.classList.remove('hidden');
    });

    aboutBtn.addEventListener('click', () => {
        hideAllSections();
        aboutContent.classList.remove('hidden');
    });

    contactBtn.addEventListener('click', () => {
        hideAllSections();
        contactContent.classList.remove('hidden');
    });

    registerBtn.addEventListener('click', () => {
        hideAllSections();
        registerContent.classList.remove('hidden');
    });

    dataEntryBtn.addEventListener('click', () => {
        hideAllSections();
        dataEntryContent.classList.remove('hidden');
    });

    viewDataBtn.addEventListener('click', () => {
        hideAllSections();
        viewDataContent.classList.remove('hidden');
    });

    // Öğrenci ve okul kaydı
    const registrationForm = document.getElementById('registrationForm');
    const schoolRegisterForm = document.getElementById('schoolRegisterForm');

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Öğrenci kaydı başarıyla tamamlandı!');
        registrationForm.reset();
    });

    schoolRegisterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Okul kaydı başarıyla tamamlandı!');
        schoolRegisterForm.reset();
    });

    // Veri girişi işlemi
    const wasteEntryForm = document.getElementById('waste-entry-form');
    wasteEntryForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Atık bilgilerini al
        const wasteType = document.getElementById('wasteType').value;
        const wasteAmount = document.getElementById('wasteAmount').value;

        // Veri girişini kaydet
        alert(`Atık türü: ${wasteType}, Miktar: ${wasteAmount} kg`);

        // Verileri sıfırlayın
        wasteEntryForm.reset();
    });

    // Veri Görüntüleme
    const totalWaste = document.getElementById('totalWaste');
    const totalPoints = document.getElementById('totalPoints');
    const wasteTypes = document.getElementById('wasteTypes');

    // Veri görüntüleme için örnek veriler
    totalWaste.textContent = '15';  // Örnek toplam atık
    totalPoints.textContent = '120'; // Örnek toplam puan
    wasteTypes.textContent = 'Plastik, Kağıt'; // Örnek atık türleri
});
