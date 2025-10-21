// src/services/nexonPersonality.js - Nexon Digital Tutor Personality
// Based on: מדריך ההוראה למורה הדיגיטלי "נקסון"

/**
 * Nexon Personality Service
 * Implements the warm, adaptive, and emotionally intelligent teaching style
 * as defined in the Nexon teaching methodology
 */

class NexonPersonality {
    constructor() {
        this.lessonPhase = 'opening'; // opening, middle, closing
        this.lastInteraction = Date.now();
    }

    // ==========================================
    // OPENING PHASE - Energetic & Inviting
    // ==========================================
    getOpeningMessage(studentName = '') {
        const name = studentName || 'שלום';
        const messages = [
            `היי ${name}! 🌟 מוכן/ה להתחיל הרפתקה מתמטית חדשה?`,
            `שלום ${name}! איזה כיף שחזרת! בוא/י נראה משהו מגניב היום 🚀`,
            `${name}, יש לי בשבילך משהו מעניין היום! מוכן/ה לאתגר? 💪`,
            `ברוך הבא ${name}! בואו נגלה משהו חדש ביחד 🎯`,
            `היי ${name}! איך אתה מרגיש היום? בוא נעשה משהו כייפי במתמטיקה! ✨`
        ];
        return messages[Math.floor(Math.random() * messages.length)];
    }

    getOpeningQuestion(topic) {
        const questions = [
            `נחשו מה? ${topic} זה בעצם די מגניב! רוצים לראות למה?`,
            `ספרו לי, מה אתם יודעים על ${topic}?`,
            `${topic} - נשמע מסובך? בואו נראה שזה בעצם פשוט!`,
            `היום נלמד על ${topic}. מה אתם חושבים, איפה זה שימושי בחיים?`
        ];
        return questions[Math.floor(Math.random() * questions.length)];
    }

    // ==========================================
    // MIDDLE PHASE - Adaptive & Supportive
    // ==========================================
    getMiddleMessage(progress, studentName = '') {
        const name = studentName || 'אתה';

        if (progress < 20) {
            return [
                `אני רואה ש${name} מתחיל/ה לחשוב על זה... זה בסדר לקחת זמן! 🤔`,
                `לאט לאט, אין מרוץ. בוא/י נעבור על זה שלב אחר שלב 🐢`,
                `נשמע קצת מסובך? בואו נפרק את זה ביחד לחלקים קטנים 🧩`
            ];
        } else if (progress < 40) {
            return [
                `כיוון טוב! אני רואה ש${name} על המסלול הנכון 👍`,
                `יפה! יש כאן התקדמות ברורה 📈`,
                `אהבתי את הכיוון הזה! תמשיך/י ככה 💫`
            ];
        } else if (progress < 60) {
            return [
                `וואו, ${name} ממש מתקדם/ת! 🌟`,
                `רואה? התחלת לתפוס את זה! זה נהדר 🎯`,
                `איזה התקדמות! ממש מרגשים אותי 💪`
            ];
        } else if (progress < 85) {
            return [
                `${name} קרוב/ה מאוד! המשך/י ככה! ✨`,
                `אתה כמעט שם! רק עוד קצת 🚀`,
                `יש! אני מרגיש/ה שאתה עומד/ת לפצח את זה 🔥`
            ];
        } else {
            return [
                `מעולה ${name}! כמעט הגענו! 🎯`,
                `אתה שם! פשוט מושלם 💎`,
                `יופי של יופי! עכשיו רק לוודא שהכל נכון ✅`
            ];
        }
    }

    getEncouragementForMistake(attemptNumber) {
        if (attemptNumber === 1) {
            return [
                `זה בסדר גמור! טעויות הן חלק מהלמידה 💙`,
                `אין דבר כזה טעות - יש רק משוב. בוא נראה איפה אפשר לשפר 🔍`,
                `כולם טועים! זה איך שלומדים. בוא ננסה שוב ביחד 🤝`
            ];
        } else if (attemptNumber === 2) {
            return [
                `אני רואה שיש פה אתגר. בוא אני אעזור לך קצת 🆘`,
                `אוקיי, אני אתן לך רמז קטן... 💡`,
                `נראה שצריך לגשת לזה אחרת. בוא נחשוב יחד 🧠`
            ];
        } else {
            return [
                `בוא נעצור לרגע ונסביר את זה מההתחלה 📚`,
                `תראה, הנושא הזה קצת מסובך. בוא נפרק אותו לצעדים קטנים 🪜`,
                `אני רואה שזה מאתגר. בוא אני אראה לך דוגמה דומה 🎬`
            ];
        }
    }

    // ==========================================
    // CLOSING PHASE - Reflective & Encouraging
    // ==========================================
    getClosingMessage(isCorrect, streak = 0, studentName = '') {
        const name = studentName || 'אתה';

        if (isCorrect) {
            if (streak > 4) {
                return `🔥 וואו! רצף של ${streak}! ${name} ממש בוער היום! 🔥`;
            } else if (streak > 2) {
                return `רצף של ${streak}! ${name} בקצב מעולה! 💪`;
            } else {
                return [
                    `כל הכבוד ${name}! עשית עבודה מצוינת 🌟`,
                    `יפה מאוד! ${name} באמת הבין/ה את זה ✨`,
                    `מושלם! ${name} פצח את זה 🎯`,
                    `איזה כיף לראות אותך מצליח! 💫`
                ];
            }
        } else {
            return [
                `זה בסדר גמור! לפעמים לוקח זמן להבין. ${name} עשה מאמץ מצוין 💙`,
                `התשובה לא מדויקת, אבל התהליך שלך היה טוב! בוא ננסה שוב 🔄`,
                `כמעט! ${name} היה קרוב מאוד. עוד ניסיון קטן ואנחנו שם 🎯`
            ];
        }
    }

    getReflectiveQuestion(topic) {
        return [
            `אז מה למדנו היום על ${topic}? 🤔`,
            `איך ${topic} קשור לדברים שכבר ידעת? 💭`,
            `מה היה הכי מעניין בתרגיל הזה? ⭐`,
            `איך תסביר את ${topic} לחבר/ה שלך? 🗣️`
        ];
    }

    getProgressSummary(correct, total, topicsLearned) {
        const percentage = Math.round((correct / total) * 100);
        const topicsList = topicsLearned.join(', ');

        if (percentage >= 80) {
            return `🎉 אחלה עבודה! ${correct} מתוך ${total} נכונים (${percentage}%)! היום למדנו: ${topicsList}. ממש גאה בך!`;
        } else if (percentage >= 60) {
            return `💪 יפה! ${correct} מתוך ${total} נכונים (${percentage}%). עבדנו על: ${topicsList}. אתה משתפר!`;
        } else {
            return `📚 עשינו ${total} תרגילים ביחד, ${correct} יצאו נכון. נושאים: ${topicsList}. זה בסדר - הלמידה לוקחת זמן!`;
        }
    }

    // ==========================================
    // METACOGNITIVE QUESTIONS
    // ==========================================
    getMetacognitiveQuestion() {
        return [
            `איך ידעת? מה עזר לך להגיע לתשובה? 🤔`,
            `מה גרם לך לחשוב ככה? 💭`,
            `היית יכול לפתור את זה אחרת? איך? 🔄`,
            `מה היה הקשה ביותר בתרגיל הזה? 🎯`,
            `אם היית צריך להסביר את זה למישהו, איך היית מתחיל? 🗣️`
        ];
    }

    // ==========================================
    // WELCOME BACK - Session Resumption
    // ==========================================
    getWelcomeBackMessage(studentName, minutesInactive) {
        const name = studentName || 'שלום';

        if (minutesInactive < 30) {
            return `${name}, ראיתי שחזרת! 👋 בוא/י נמשיך מאיפה שעצרנו...`;
        } else if (minutesInactive < 120) {
            return `ברוך שובך ${name}! 🌟 רוצה שנרענן קצת את מה שלמדנו?`;
        } else {
            return `${name}! כמה זמן! 😊 בוא נתחיל עם משהו קל כדי להתחמם...`;
        }
    }

    // ==========================================
    // HINT SYSTEM
    // ==========================================
    getHint(difficulty, attemptNumber) {
        if (difficulty === 'gentle') {
            return [
                `💡 רמז קטן: תסתכל/י על הדוגמה שלמדנו לפני זה`,
                `🔍 חשוב/י על השלב הראשון - מה צריך לעשות קודם?`,
                `✨ יש כאן דפוס - אתה יכול/ה למצוא אותו?`
            ];
        } else if (difficulty === 'specific') {
            return [
                `🎯 בוא נחשוב רגע - איזה נוסחה עוזרת לנו פה?`,
                `📐 אולי כדאי לפרק את זה לחלקים קטנים יותר?`,
                `💪 מה היינו עושים בתרגיל הדומה מקודם?`
            ];
        } else { // detailed
            return [
                `🔔 אוקיי, בוא אני אראה לך בדיוק מה לעשות...`,
                `📚 הנה דוגמה דומה עם פתרון מלא:`,
                `🎓 בוא נעשה את זה שלב אחר שלב ביחד:`
            ];
        }
    }

    // ==========================================
    // TIME-BASED GREETINGS
    // ==========================================
    getTimeBasedGreeting(studentName = '') {
        const hour = new Date().getHours();
        const name = studentName || 'שלום';

        if (hour < 6) {
            return `${name}, אתה לא ישן/ה? 😴 גם מתמטיקה יכולה לחכות לבוקר!`;
        } else if (hour < 12) {
            return `בוקר טוב ${name}! ☀️ איזה כיף להתחיל את היום עם מתמטיקה!`;
        } else if (hour < 18) {
            return `שלום ${name}! 🌤️ מוכנים למתמטיקה?`;
        } else if (hour < 22) {
            return `ערב טוב ${name}! 🌆 זמן מעולה ללמוד!`;
        } else {
            return `${name}, מאחרים ללמוד? 🌙 כל הכבוד על המוטיבציה!`;
        }
    }

    // ==========================================
    // ADAPTIVE DIFFICULTY MESSAGES
    // ==========================================
    getSuggestionForStruggle(topicName) {
        return [
            `אני רואה ש-${topicName} קצת מאתגר. רוצה שנעבור על היסודות שוב? 🔄`,
            `${topicName} דורש תרגול. בוא נעשה כמה דוגמאות נוספות ביחד 💪`,
            `נראה ש-${topicName} צריך עוד חיזוק. אין בעיה - נשקיע בזה זמן 📚`
        ];
    }

    getSuggestionForMastery(topicName) {
        return [
            `וואו! אתה ממש שולט ב-${topicName}! 🌟 רוצה לנסות משהו יותר מאתגר?`,
            `${topicName} - מצוין! בוא נעלה רמה קושי? 🚀`,
            `אתה פוצץ את ${topicName}! מה דעתך על נושא חדש? 🎯`
        ];
    }

    // ==========================================
    // EMOTIONAL SUPPORT
    // ==========================================
    getEmotionalSupport(emotion) {
        switch(emotion) {
            case 'frustrated':
                return [
                    `אני רואה שזה מתסכל. זה בסדר להרגיש ככה 💙 בוא נקח פסק זמן קטן?`,
                    `תרגישו חופשי להיעזר בי בכל שלב. אני פה בשבילך 🤝`,
                    `מתמטיקה זה לא קל, וזה בסדר לקחת את הזמן 🌱`
                ];
            case 'confident':
                return [
                    `איזה ביטחון! זה נהדר! 💪`,
                    `כיף לראות אותך מרגיש/ה בטוח/ה עם החומר 🌟`,
                    `כן! זה בדיוק הרגש שרציתי שתחווה 🎯`
                ];
            case 'confused':
                return [
                    `זה בסדר להיות מבולבל/ת. בוא נעצור ונבהיר 🔍`,
                    `אני פה בשבילך. איפה התבלבלת? 💭`,
                    `בוא נחזור צעד אחורה ונסביר זאת מחדש 📚`
                ];
            default:
                return `איך אתה מרגיש/ה עם החומר? 🤔`;
        }
    }

    // ==========================================
    // UTILITY METHODS
    // ==========================================
    setPhase(phase) {
        this.lessonPhase = phase;
    }

    getRandomItem(array) {
        if (Array.isArray(array[0])) {
            // Nested array - flatten and pick
            return array[Math.floor(Math.random() * array.length)];
        }
        return array[Math.floor(Math.random() * array.length)];
    }

    updateLastInteraction() {
        this.lastInteraction = Date.now();
    }

    getInactiveMinutes() {
        return (Date.now() - this.lastInteraction) / 1000 / 60;
    }
}

// Create singleton instance
const nexonPersonality = new NexonPersonality();

export default nexonPersonality;

// Named exports for convenience
export const {
    getOpeningMessage,
    getOpeningQuestion,
    getMiddleMessage,
    getEncouragementForMistake,
    getClosingMessage,
    getReflectiveQuestion,
    getMetacognitiveQuestion,
    getWelcomeBackMessage,
    getHint,
    getTimeBasedGreeting,
    getSuggestionForStruggle,
    getSuggestionForMastery,
    getEmotionalSupport
} = nexonPersonality;