import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

// Supported languages with their configurations
const SUPPORTED_LANGUAGES = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    direction: 'ltr'
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    direction: 'ltr'
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    direction: 'ltr'
  },
  hi: {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
    direction: 'ltr'
  },
  sw: {
    code: 'sw',
    name: 'Swahili',
    nativeName: 'Kiswahili',
    flag: '🇰🇪',
    direction: 'ltr'
  },
  am: {
    code: 'am',
    name: 'Amharic',
    nativeName: 'አማርኛ',
    flag: '🇪🇹',
    direction: 'ltr'
  },
  yo: {
    code: 'yo',
    name: 'Yoruba',
    nativeName: 'Yorùbá',
    flag: '🇳🇬',
    direction: 'ltr'
  },
  ha: {
    code: 'ha',
    name: 'Hausa',
    nativeName: 'Hausa',
    flag: '🇳🇬',
    direction: 'ltr'
  }
}

// Translation strings - Basic set for demonstration
const TRANSLATIONS = {
  en: {
    // Common
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    confirm: 'Confirm',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    add: 'Add',
    search: 'Search',
    next: 'Next',
    back: 'Back',
    continue: 'Continue',
    skip: 'Skip',
    retry: 'Retry',
    
    // Navigation
    home: 'Home',
    dashboard: 'Dashboard',
    farm: 'Farm',
    diagnosis: 'Diagnosis',
    irrigation: 'Irrigation',
    planning: 'Planning',
    profile: 'Profile',
    settings: 'Settings',
    logout: 'Logout',
    
    // Auth
    login: 'Login',
    register: 'Register',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    forgotPassword: 'Forgot Password?',
    phoneNumber: 'Phone Number',
    firstName: 'First Name',
    lastName: 'Last Name',
    
    // Farm
    myFarms: 'My Farms',
    addFarm: 'Add Farm',
    farmName: 'Farm Name',
    farmSize: 'Farm Size',
    location: 'Location',
    crops: 'Crops',
    
    // Common Actions
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    takePhoto: 'Take Photo',
    uploadPhoto: 'Upload Photo',
    getCurrentLocation: 'Get Current Location',
    enableLocation: 'Enable Location',
    
    // Status
    online: 'Online',
    offline: 'Offline',
    syncing: 'Syncing...',
    healthy: 'Healthy',
    warning: 'Warning',
    critical: 'Critical',
    
    // Greetings
    goodMorning: 'Good Morning',
    goodAfternoon: 'Good Afternoon',
    goodEvening: 'Good Evening',
    welcome: 'Welcome',
    welcomeBack: 'Welcome Back',
    
    // App specific
    appName: 'KisanAI',
    tagline: 'AI-powered farming assistant',
    cropHealth: 'Crop Health',
    waterManagement: 'Water Management',
    farmPlanning: 'Farm Planning',
    
    // Placeholder for missing translations
    translationMissing: 'Translation missing'
  },
  
  // Spanish translations (subset)
  es: {
    loading: 'Cargando...',
    error: 'Error',
    success: 'Éxito',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    save: 'Guardar',
    home: 'Inicio',
    dashboard: 'Panel',
    farm: 'Granja',
    diagnosis: 'Diagnóstico',
    irrigation: 'Irrigación',
    planning: 'Planificación',
    login: 'Iniciar Sesión',
    register: 'Registrarse',
    appName: 'KisanAI',
    tagline: 'Asistente agrícola con IA',
    welcome: 'Bienvenido',
    translationMissing: 'Traducción faltante'
  },
  
  // French translations (subset)
  fr: {
    loading: 'Chargement...',
    error: 'Erreur',
    success: 'Succès',
    cancel: 'Annuler',
    confirm: 'Confirmer',
    save: 'Sauvegarder',
    home: 'Accueil',
    dashboard: 'Tableau de Bord',
    farm: 'Ferme',
    diagnosis: 'Diagnostic',
    irrigation: 'Irrigation',
    planning: 'Planification',
    login: 'Se Connecter',
    register: 'S\'inscrire',
    appName: 'KisanAI',
    tagline: 'Assistant agricole IA',
    welcome: 'Bienvenue',
    translationMissing: 'Traduction manquante'
  },
  
  // Swahili translations (subset)
  sw: {
    loading: 'Inapakia...',
    error: 'Hitilafu',
    success: 'Mafanikio',
    cancel: 'Ghairi',
    confirm: 'Thibitisha',
    save: 'Hifadhi',
    home: 'Nyumbani',
    dashboard: 'Dashibodi',
    farm: 'Shamba',
    diagnosis: 'Uchunguzi',
    irrigation: 'Umwagiliaji',
    planning: 'Mipango',
    login: 'Ingia',
    register: 'Jiandikishe',
    appName: 'KisanAI',
    tagline: 'Msaidizi wa kilimo wa AI',
    welcome: 'Karibu',
    translationMissing: 'Tafsiri haijatolewa'
  }
}

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en')
  const [isLoading, setIsLoading] = useState(false)

  // Load saved language preference on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('kisanai_language')
    if (savedLanguage && SUPPORTED_LANGUAGES[savedLanguage]) {
      setCurrentLanguage(savedLanguage)
    } else {
      // Detect browser language
      const browserLanguage = navigator.language.split('-')[0]
      if (SUPPORTED_LANGUAGES[browserLanguage]) {
        setCurrentLanguage(browserLanguage)
      }
    }
  }, [])

  // Update document language and direction when language changes
  useEffect(() => {
    const language = SUPPORTED_LANGUAGES[currentLanguage]
    if (language) {
      document.documentElement.lang = language.code
      document.documentElement.dir = language.direction
    }
  }, [currentLanguage])

  const changeLanguage = async (languageCode) => {
    if (!SUPPORTED_LANGUAGES[languageCode]) {
      console.warn(`Language ${languageCode} is not supported`)
      return
    }

    setIsLoading(true)
    
    try {
      // Simulate loading time for language change
      await new Promise(resolve => setTimeout(resolve, 300))
      
      setCurrentLanguage(languageCode)
      localStorage.setItem('kisanai_language', languageCode)
    } catch (error) {
      console.error('Failed to change language:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const translate = (key, fallback = null) => {
    const translation = TRANSLATIONS[currentLanguage]?.[key] || 
                      TRANSLATIONS.en[key] || 
                      fallback || 
                      key

    return translation
  }

  // Short alias for translate function
  const t = translate

  const getCurrentLanguage = () => SUPPORTED_LANGUAGES[currentLanguage]
  
  const getSupportedLanguages = () => Object.values(SUPPORTED_LANGUAGES)

  const isRTL = () => getCurrentLanguage()?.direction === 'rtl'

  const value = {
    currentLanguage,
    changeLanguage,
    translate,
    t, // Short alias
    getCurrentLanguage,
    getSupportedLanguages,
    isRTL,
    isLoading,
    SUPPORTED_LANGUAGES
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export default LanguageContext