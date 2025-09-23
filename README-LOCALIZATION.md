# Localization System Documentation

## Overview
The Auto Miami website now features a complete localization system supporting Bulgarian (default) and English languages. Users can switch between languages using the language switcher button located in the header navigation.

## Features

### 🌍 **Two Languages**
- **Bulgarian (bg)**: Default/main language with all current website content
- **English (en)**: Complete translation of all website text

### 🔄 **Language Switcher**
- **Desktop**: Located in the right side of the header navigation
- **Mobile**: Located at the bottom of the mobile menu
- **Button Text**: Shows "EN" when in Bulgarian, "BG" when in English

### 💾 **Persistent Storage**
- Language preference is saved in `localStorage`
- Automatically remembers user's choice on subsequent visits

### 🎨 **Smooth Transitions**
- Fade effect when switching languages
- Loading spinner during language change
- Responsive design for all screen sizes

## Implementation Details

### Files Modified
1. **`localization.js`** - Core localization system
2. **`index.html`** - Added language switcher buttons
3. **`style.css`** - Styling for language switcher and transitions
4. **`script.js`** - Initialization integration

### Key Functions
- `changeLanguage(lang)` - Main language switching function
- `updatePageContent(lang)` - Updates all page text
- `initLocalization()` - Initializes the system
- `addLanguageTransition()` - Adds smooth transition effects

### Text Coverage
The system localizes all major website content:
- Navigation menu
- Hero section
- Services and descriptions
- About us section
- Gallery section
- Pricing section
- Complex locations
- Footer content
- Mobile menu

## Usage

### For Users
1. Click the language switcher button in the header
2. Language changes immediately with smooth transition
3. Preference is saved for future visits

### For Developers
1. **Adding new text**: Add translations to the `translations` object in `localization.js`
2. **Adding new elements**: Update the `updatePageContent()` function
3. **Styling**: Modify CSS classes in `style.css`

## Technical Features

### SEO Optimization
- Updates `document.title` and meta description
- Changes `html` lang attribute
- Maintains search engine compatibility

### Accessibility
- ARIA labels for screen readers
- Keyboard navigation support
- Focus management

### Performance
- Efficient DOM updates
- Minimal reflow/repaint
- Smooth animations

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Progressive enhancement approach

## Future Enhancements
- Support for additional languages
- RTL language support
- Dynamic content loading
- Server-side language detection 