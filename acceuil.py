import logging
import os
from dotenv import load_dotenv
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import Application, CommandHandler, ContextTypes

# Charge les variables d'environnement
load_dotenv()

# Configure le logging
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)
logger = logging.getLogger(__name__)

# --- CONFIGURATION ---
BOT_TOKEN = os.getenv("TELEGRAM_TOKEN")

if not BOT_TOKEN:
    logger.error("Le token n'a pas été trouvé ! Vérifie ton fichier .env")
    exit(1)

# ⚠️ Assure-toi que cette image est bien dans le dossier du bot
IMAGE_ACCUEIL = "LogoReel.jpeg"  

# URL de ta WebApp (GitHub Pages ou autre)
MINI_APP_URL = "https://miniapp47.github.io/CasaVerdeBot/"

# Numéro WhatsApp (Casa Verde)
WHATSAPP_LINK = "https://wa.me/33759010537"

# --- Fonction /start ---
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Envoie l'image et le menu principal."""
    user = update.effective_user
    logger.info(f"Commande /start par {user.first_name}")

    # Nouveau texte de bienvenue Casa Verde
    caption_text = (
        "<b>🌴🍃 CASA VERDE 🍃🌴</b>\n"
        "✨ <i>Bienvenue dans votre coin chill</i> ✨\n"
        "━━━━━━━━━━━━━━━\n"
        "📍 <b>Meetup :</b> 93\n"
        "🚚 <b>Livraison :</b> 14h → 02h\n"
        "🤖 <b>Commande :</b> 24h/24 via le bot\n"
        "💶 <b>Minimum :</b> 80€\n"
        "━━━━━━━━━━━━━━━\n"
        "⚡ Rapide • Discret • Fiable\n"
        "🌿 Qualité sélectionnée\n"
        "😌 Satisfaction garantie\n"
        "💬 <i>Un message suffit, on s’occupe de vous.</i>\n\n"
        "<b>🟢 Casa Verde — Green vibes only 🟢</b>"
    )

    # Boutons épurés (uniquement Shop et WhatsApp)
    keyboard = [
        [InlineKeyboardButton("Accéder au Shop 🛍️", web_app=WebAppInfo(url=MINI_APP_URL))],
        [InlineKeyboardButton("WhatsApp 📞", url=WHATSAPP_LINK)]
    ]
    
    reply_markup = InlineKeyboardMarkup(keyboard)

    try:
        await update.message.reply_photo(
            photo=open(IMAGE_ACCUEIL, 'rb'),
            caption=caption_text,
            reply_markup=reply_markup,
            parse_mode='HTML'
        )
    except Exception as e:
        logger.error(f"Erreur envoi Image ({IMAGE_ACCUEIL}): {e}")
        # Fallback texte si l'image plante
        await update.message.reply_text(
            text=caption_text,
            reply_markup=reply_markup,
            parse_mode='HTML'
        )

# --- Main ---
def main() -> None:
    application = Application.builder().token(BOT_TOKEN).build()

    application.add_handler(CommandHandler("start", start))

    # Mise à jour du log d'exécution
    logger.info("Bot Casa Verde en cours d'exécution...")
    application.run_polling()

if __name__ == '__main__':
    main()