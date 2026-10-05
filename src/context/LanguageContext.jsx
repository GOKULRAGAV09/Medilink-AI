import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    dashboard: 'Dashboard',
    uploadPrescription: 'Upload Prescription',
    pharmacyToken: 'Pharmacy Token',
    orderTracking: 'Order Tracking',
    medicineAvailability: 'Medicine Availability',
    prescriptionHistory: 'Prescription History',
    aiMedicineAssistant: 'AI Medicine Assistant',
    profile: 'Profile',
    getStarted: 'Get Started',
    tryDemo: 'Try Demo',
    currentToken: 'Current Token',
    estimatedWaitingTime: 'Estimated Waiting Time',
    readyForPickup: 'Ready for Pickup',
    medicinesBeingPrepared: 'Medicines Being Prepared',
    goodMorning: 'Good Morning',
    currentlyServing: 'Currently Serving',
    peopleAhead: 'People Ahead',
    minutes: 'minutes',
    yourTurnApproaching: 'Your turn is approaching!',
    tokenSoonMessage: 'Token A24 will be called soon. Please stay nearby.',
    available: 'Available',
    limitedStock: 'Limited Stock',
    outOfStock: 'Out of Stock',
    viewMedicines: 'View Medicines',
    viewDetails: 'View Details',
    prescriptionReceived: 'Prescription Received',
    prescriptionVerified: 'Prescription Verified',
    medicinesBeingPreparedStep: 'Medicines Being Prepared',
    completed: 'Completed',
    estimatedPickup: 'Estimated Pickup',
    trackOrder: 'Track Order',
    uploadPrescriptionBtn: 'Upload Prescription',
    viewToken: 'View Token',
    recentPrescription: 'Recent Prescription',
    quickActions: 'Quick Actions',
    orderStatus: 'Order Status',
    disclaimer: 'Medilink AI is an academic prototype and does not provide medical diagnosis or replace professional medical advice. Always verify medicines and prescriptions with a qualified healthcare professional.',
    backToHome: 'Back to Home',
    systemStatus: 'System Status',
    liveConnectivity: 'Live connectivity check between the React frontend and Express backend.',
    language: 'Language',
    notificationDemo: 'Demo Notification',
    stepReady: 'Ready for Pickup',
    stepCompleted: 'Completed',
  },
  ta: {
    dashboard: 'டாஷ்போர்டு',
    uploadPrescription: 'மருந்து சீட்டு பதிவேற்றம்',
    pharmacyToken: 'மருந்தக டோக்கன்',
    orderTracking: 'ஆர்டர் கண்காணிப்பு',
    medicineAvailability: 'மருந்து கிடைக்கும் நிலை',
    prescriptionHistory: 'மருந்து சீட்டு வரலாறு',
    aiMedicineAssistant: 'AI மருந்து உதவியாளர்',
    profile: 'சுயவிவரம்',
    getStarted: 'தொடங்குங்கள்',
    tryDemo: 'டெமோ முயற்சி',
    currentToken: 'தற்போதைய டோக்கன்',
    estimatedWaitingTime: 'மதிப்பிடப்பட்ட காத்திருப்பு நேரம்',
    readyForPickup: 'பெறுவதற்கு தயாராக உள்ளது',
    medicinesBeingPrepared: 'மருந்துகள் தயாராகின்றன',
    goodMorning: 'காலை வணக்கம்',
    currentlyServing: 'தற்போது சேவை',
    peopleAhead: 'முன்னால் உள்ளவர்கள்',
    minutes: 'நிமிடங்கள்',
    yourTurnApproaching: 'உங்கள் முறை நெருங்கி வருகிறது!',
    tokenSoonMessage: 'டோக்கன் A24 விரைவில் அழைக்கப்படும். தயவுசெய்து அருகில் இருங்கள்.',
    available: 'கிடைக்கும்',
    limitedStock: 'குறைந்த இருப்பு',
    outOfStock: 'இல்லை',
    viewMedicines: 'மருந்துகளை காண்க',
    viewDetails: 'விவரங்களை காண்க',
    prescriptionReceived: 'மருந்து சீட்டு பெறப்பட்டது',
    prescriptionVerified: 'மருந்து சீட்டு சரிபார்க்கப்பட்டது',
    medicinesBeingPreparedStep: 'மருந்துகள் தயாராகின்றன',
    completed: 'முடிந்தது',
    estimatedPickup: 'மதிப்பிடப்பட்ட சேகரிப்பு',
    trackOrder: 'ஆர்டர் கண்காணி',
    uploadPrescriptionBtn: 'சீட்டு பதிவேற்று',
    viewToken: 'டோக்கன் காண்க',
    recentPrescription: 'சமீபத்திய மருந்து சீட்டு',
    quickActions: 'விரைவு செயல்கள்',
    orderStatus: 'ஆர்டர் நிலை',
    disclaimer: 'Medilink AI ஒரு கல்வி முன்னோடி மற்றும் மருத்துவ நோயறிதல் வழங்கவில்லை அல்லது தொழில்முறை மருத்துவ ஆலோசனையை மாற்றவில்லை. எப்போதும் தகுதிவாய்ந்த மருத்துவரிடம் மருந்துகள் மற்றும் மருந்து சீட்டுகளை சரிபார்க்கவும்.',
    backToHome: 'முகப்புக்கு திரும்பு',
    systemStatus: 'கணினி நிலை',
    liveConnectivity: 'React முன்பகுதி மற்றும் Express பின்பகுதி இடையே நேரடி இணைப்பு சோதனை.',
    language: 'மொழி',
    notificationDemo: 'டெமோ அறிவிப்பு',
    stepReady: 'பெறுவதற்கு தயாராக உள்ளது',
    stepCompleted: 'முடிந்தது',
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const t = (key) => translations[lang][key] || translations['en'][key] || key;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
