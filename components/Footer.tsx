'use client';

import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';
export default function Footer() {
  // حالة لعبة Tic-Tac-Toe التفاعلية
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);

  // حساب الفائز
  const checkWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return squares.includes(null) ? null : 'Tie';
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);

    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);
      return;
    }

    // حركة الذكاء الاصطناعي التلقائية السريعة (O)
    setIsXNext(false);
    setTimeout(() => {
      const emptyIndices = newBoard
        .map((val, idx) => (val === null ? idx : null))
        .filter((val): val is number => val !== null);

      if (emptyIndices.length > 0) {
        const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        newBoard[randomIndex] = 'O';
        setBoard([...newBoard]);
        const nextWin = checkWinner(newBoard);
        if (nextWin) setWinner(nextWin);
      }
      setIsXNext(true);
    }, 350);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setIsXNext(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-black text-white border-t border-zinc-900 pt-20 pb-28 selection:bg-[#ff2e7e] selection:text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Left Column: Brand, Socials, Visitor Counter */}
        <div className="flex-1 space-y-6">
          
          {/* Logo with Pink Overlay Icon */}
          <div className="flex items-center gap-2">
            <div className="relative w-4 h-4">
              <span className="absolute top-0 left-0 w-3 h-3 bg-zinc-600 rounded-sm"></span>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#ff2e7e] rounded-sm"></span>
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight text-white font-mono">
              ahmedsaber.dev/
            </span>
          </div>

          <p className="text-xs md:text-sm text-zinc-400 font-sans max-w-sm leading-relaxed">
            Technical SEO, generative search optimization & modern web engineering by Ahmed Saber.
          </p>

          {/* Social Icons (Inline Clean SVGs) */}
          <div className="flex items-center gap-5 text-zinc-400">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff2e7e] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff2e7e] transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff2e7e] transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@ahmedsaber.dev"
              className="hover:text-[#ff2e7e] transition-colors"
              aria-label="Email"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>

          {/* Visitor Counter */}
          <div className="pt-4 text-xs md:text-sm font-sans text-zinc-400">
            You were visitor number{' '}
            <span className="font-mono font-bold text-white tracking-wide">
              248,190
            </span>
          </div>
        </div>

        {/* Right Column: Interactive Tic-Tac-Toe Widget */}
        <div className="flex flex-col items-start md:items-end w-full md:w-auto">
          <div className="text-xs md:text-sm text-zinc-400 mb-4 font-sans flex items-center gap-2">
            <span>By the way, can you beat me? :)</span>
            {winner && (
              <button
                onClick={resetGame}
                className="text-[11px] font-mono text-[#ff2e7e] underline underline-offset-2 ml-1"
              >
                Reset
              </button>
            )}
          </div>

          {/* Tic-Tac-Toe Grid */}
          <div className="relative w-44 h-44 grid grid-cols-3 grid-rows-3 border-collapse">
            {/* Grid Lines */}
            <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-zinc-800 pointer-events-none" />
            <div className="absolute right-1/3 top-0 bottom-0 w-[1px] bg-zinc-800 pointer-events-none" />
            <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-zinc-800 pointer-events-none" />
            <div className="absolute bottom-1/3 left-0 right-0 h-[1px] bg-zinc-800 pointer-events-none" />

            {board.map((cell, idx) => (
              <button
                key={idx}
                onClick={() => handleClick(idx)}
                className="w-full h-full flex items-center justify-center font-mono text-xl font-bold transition-colors hover:bg-zinc-950/40"
              >
                {cell === 'X' && <span className="text-[#ff2e7e]">X</span>}
                {cell === 'O' && <span className="text-zinc-200">O</span>}
              </button>
            ))}
          </div>

          {winner && (
            <div className="mt-2 text-[11px] font-mono text-[#ff2e7e]">
              {winner === 'Tie' ? "It's a tie!" : `Winner: ${winner}!`}
            </div>
          )}
        </div>

      </div>

      {/* Scroll to Top Floating Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-zinc-950 border border-zinc-800 hover:border-[#ff2e7e] text-zinc-300 hover:text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4 text-zinc-400 group-hover:text-[#ff2e7e] transition-colors" />
      </button>
    </footer>
  );
}