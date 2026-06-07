import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { quizQuestions, styleResults } from "../data";
import { StyleResult } from "../types";
import { Sparkles, ArrowRight, RotateCcw, Calendar, Check, Compass } from "lucide-react";

interface StyleQuizProps {
  onStyleSelected?: (styleName: string) => void;
  onBookWithName?: (selectedStyle: string) => void;
}

export default function StyleQuiz({ onStyleSelected, onBookWithName }: StyleQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<StyleResult | null>(null);

  const handleOptionSelect = (style: string) => {
    const updatedAnswers = [...answers, style];
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate scores
      const scores: Record<string, number> = {
        classical: 0,
        minimalist: 0,
        contemporary: 0,
        "art-deco": 0
      };

      updatedAnswers.forEach((styleTag) => {
        if (styleTag in scores) {
          scores[styleTag] += 1;
        }
      });

      // Find highest score
      let highestStyle = "minimalist";
      let maxScore = -1;
      Object.keys(scores).forEach((styleKey) => {
        if (scores[styleKey] > maxScore) {
          maxScore = scores[styleKey];
          highestStyle = styleKey;
        }
      });

      const matchedResult = styleResults[highestStyle] || styleResults["minimalist"];
      setResult(matchedResult);
      if (onStyleSelected) {
        onStyleSelected(matchedResult.title);
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div id="aesthetic-quiz" className="bg-white dark:bg-luxury-charcoal max-w-4xl mx-auto rounded-sm border border-luxury-beige-300/40 dark:border-luxury-charcoal-light/70 p-6 md:p-12 shadow-md relative overflow-hidden">
      
      {/* Absolute faint background pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-luxury-gold-300/10 to-transparent pointer-events-none"></div>

      <AnimatePresence mode="wait">
        {!result ? (
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Header progress info */}
            <div className="flex justify-between items-center border-b border-luxury-beige-200/40 dark:border-luxury-charcoal-light/40 pb-4">
              <span className="text-xs tracking-widest text-luxury-gold-500 uppercase font-display font-semibold flex items-center gap-1.5 align-middle">
                <Compass className="w-4 h-4 animate-spin-[20s]" />
                Interactive Style Matchmaker
              </span>
              <span className="text-xs font-mono text-luxury-charcoal/50 dark:text-luxury-beige-300/50">
                PHASE {currentQuestionIndex + 1} OF {quizQuestions.length}
              </span>
            </div>

            {/* Question Text */}
            <h3 className="font-serif text-2xl md:text-3xl text-luxury-charcoal dark:text-luxury-beige-50 leading-tight">
              {currentQuestion.question}
            </h3>

            {/* Grid of Interactive options with high end cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.options.map((opt, oIdx) => (
                <button
                  key={oIdx}
                  onClick={() => handleOptionSelect(opt.style)}
                  id={`quiz-opt-${oIdx}`}
                  className="flex flex-col text-left border border-luxury-beige-200 hover:border-luxury-gold-400 dark:border-luxury-charcoal-light/60 dark:hover:border-luxury-gold-300/60 bg-luxury-beige-50/50 dark:bg-luxury-charcoal-light/30 rounded-xs overflow-hidden group transition-all duration-300 hover:shadow-sm cursor-pointer outline-hidden"
                >
                  <div className="aspect-video w-full overflow-hidden relative">
                    <img
                      src={opt.image}
                      alt={opt.text}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                  </div>
                  <div className="p-4 md:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <p className="text-xs md:text-sm text-luxury-charcoal dark:text-luxury-beige-100 font-sans font-light leading-relaxed group-hover:text-luxury-gold-600 dark:group-hover:text-luxury-gold-300">
                      {opt.text}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-luxury-gold-500 font-display font-medium self-end opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      Select Space Mood
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Question indicators dots */}
            <div className="flex justify-center gap-1.5 pt-4">
              {quizQuestions.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    dotIdx === currentQuestionIndex ? "w-8 bg-luxury-gold-500" : "w-1.5 bg-luxury-beige-300 dark:bg-luxury-charcoal-light"
                  }`}
                ></span>
              ))}
            </div>
          </motion.div>
        ) : (
          /* RESULT PRESENTATION CARD */
          <motion.div
            key="result-pane"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="text-center space-y-3" id="quiz-result-heading">
              <span className="inline-flex items-center gap-1 bg-luxury-gold-100 dark:bg-luxury-gold-600/20 text-luxury-gold-600 dark:text-luxury-gold-300 px-3 py-1 rounded-full text-xs font-display font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Aesthetic Blueprint Revealed
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-luxury-charcoal dark:text-luxury-beige-50">
                {result.title}
              </h3>
              <p className="text-sm dark:text-luxury-beige-300 max-w-2xl mx-auto font-sans font-light leading-relaxed">
                {result.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-y border-luxury-beige-200/50 dark:border-luxury-charcoal-light/40 py-8">
              
              {/* Materials & Colors Column */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs uppercase font-display font-bold tracking-widest text-luxury-gold-600 dark:text-luxury-gold-400 mb-3">
                    Your Curated Materials
                  </h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {result.materials.map((mat, mIdx) => (
                      <li key={mIdx} className="text-xs text-luxury-charcoal/80 dark:text-luxury-beige-200 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold-500"></span>
                        <span className="font-sans font-light">{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-display font-bold tracking-widest text-luxury-gold-600 dark:text-luxury-gold-400 mb-3">
                    Luxury Color Swatches
                  </h4>
                  <div className="flex gap-4">
                    {result.colors.map((color, colIdx) => {
                      // Simple mapping for representation swatches representation
                      const bgClassMapping: Record<string, string> = {
                        "Warm Ivory": "#FCFBF9",
                        "Antique Gold": "#C19D5A",
                        "Muted Olive": "#556B2F",
                        "Deep Burgundy": "#800020",
                        "Bone White": "#E8E5DF",
                        "Warm Cream / Ecru": "#F5F0E6",
                        "Muted Stone Grey": "#8B8682",
                        "Soft Sand Oak": "#C2B280",
                        "Charcoal Black": "#111111",
                        "Inky Slate": "#2F4F4F",
                        "Chalk White": "#FFFFFF",
                        "Sophisticated Cognac Leather": "#8B4513",
                        "Imperial Gold": "#DAA520",
                        "Emerald Teal": "#004B49",
                        "Midnight Indigo": "#191970"
                      };
                      const hex = bgClassMapping[color] || "#D4B478";
                      return (
                        <div key={colIdx} id={`color-bubble-${colIdx}`} className="flex flex-col items-center gap-1.5">
                          <div
                            className="w-10 h-10 rounded-full border border-luxury-beige-300 dark:border-luxury-charcoal/50 shadow-xs relative"
                            style={{ backgroundColor: hex }}
                          ></div>
                          <span className="text-[10px] text-luxury-charcoal/60 dark:text-luxury-beige-300 font-sans font-medium text-center leading-tight">
                            {color}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Design Elements & Align Segment */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs uppercase font-display font-bold tracking-widest text-luxury-gold-600 dark:text-luxury-gold-400 mb-3">
                    Architectural Layout Principles
                  </h4>
                  <ul className="space-y-2">
                    {result.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-luxury-charcoal/80 dark:text-luxury-beige-200 flex items-start gap-2 leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-luxury-gold-500 shrink-0 mt-0.5" />
                        <span className="font-sans font-light">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-luxury-beige-100 dark:bg-luxury-charcoal-light p-4 rounded-xs border border-luxury-beige-300/20">
                  <span className="text-[10px] uppercase font-display font-bold text-luxury-gold-500 tracking-wider">
                    Recommended Study Case
                  </span>
                  <div className="font-serif text-lg text-luxury-charcoal dark:text-luxury-beige-100 mt-1">
                    {result.matchingProject}
                  </div>
                  <p className="text-xs text-luxury-charcoal/60 dark:text-luxury-beige-300/80 font-sans font-light mt-1">
                    We invite you to scroll down and review this featured case study reflecting exactly your refined material tendencies.
                  </p>
                </div>
              </div>

            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-luxury-beige-100/50 dark:bg-luxury-charcoal-light/10 p-4 rounded-sm">
              <button
                onClick={handleRestart}
                id="btn-quiz-reset"
                className="flex items-center gap-2 text-xs font-display font-semibold transition-all hover:text-luxury-gold-500 text-luxury-charcoal/70 dark:text-luxury-beige-300 focus:outline-hidden cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 animate-reverse" />
                Retake Style Study
              </button>
              
              <button
                onClick={() => onBookWithName && onBookWithName(result.title)}
                id="btn-quiz-book"
                className="flex items-center gap-2 bg-luxury-gold-500 text-white dark:text-luxury-charcoal dark:bg-luxury-beige-50 hover:bg-luxury-gold-600 dark:hover:bg-luxury-beige-100 px-6 py-2.5 rounded-xs text-xs font-display font-semibold transition-all cursor-pointer hover:shadow-xs active:scale-[0.98]"
              >
                <Calendar className="w-3.5 h-3.5" />
                Pre-Fill My Style Consultation Form
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
