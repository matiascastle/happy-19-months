/* ============================================================
   MUSEUM CONTENT
   - Photos hang in chronological order (the date is in the file name).
   - Nothing is written on or next to the photos. No captions.
   - To add a photo: drop it in fotos/, run  bash preparar-fotos.sh  and paste the line.
   ============================================================ */

window.MUSEO = {
  titulo: "Happy 19 Months",
  visitante: "Aya",
  viajes: ["Oklahoma", "New York", "Miami", "Argentina", "Peru"],
  porSala: 9,                 // photos per room

  // Little friends and details around the museum (names as given)
  nombres: {
    munecoNieve: "Pio",
    fantasma: "Fantasma de los abrazos"
  },

  fotos: [
    { archivo: "fotos/2024-12-24_190946.jpg", mini: "fotos/mini/2024-12-24_190946.jpg", w: 1600, h: 900 },
    { archivo: "fotos/2024-12-29_172416.jpg", mini: "fotos/mini/2024-12-29_172416.jpg", w: 1600, h: 900 },
    { archivo: "fotos/2025-01-09_110413.jpg", mini: "fotos/mini/2025-01-09_110413.jpg", w: 1600, h: 900 },
    { archivo: "fotos/2025-02-21_144650.jpg", mini: "fotos/mini/2025-02-21_144650.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2025-02-21_144708.jpg", mini: "fotos/mini/2025-02-21_144708.jpg", w: 1600, h: 719 },
    { archivo: "fotos/2025-02-21_154346.jpg", mini: "fotos/mini/2025-02-21_154346.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2025-05-12_130404.jpg", mini: "fotos/mini/2025-05-12_130404.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2025-05-12_152217.jpg", mini: "fotos/mini/2025-05-12_152217.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2025-05-13_111647.jpg", mini: "fotos/mini/2025-05-13_111647.jpg", w: 1200, h: 1600 },
    { archivo: "fotos/2025-05-13_131930.jpg", mini: "fotos/mini/2025-05-13_131930.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2025-05-17_155659.jpg", mini: "fotos/mini/2025-05-17_155659.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2025-05-20_142548.jpg", mini: "fotos/mini/2025-05-20_142548.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2025-05-20_142926.jpg", mini: "fotos/mini/2025-05-20_142926.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2025-05-21_193336.jpg", mini: "fotos/mini/2025-05-21_193336.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2025-05-25_161609.jpg", mini: "fotos/mini/2025-05-25_161609.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2025-12-19_175119.jpg", mini: "fotos/mini/2025-12-19_175119.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2025-12-20_222436.jpg", mini: "fotos/mini/2025-12-20_222436.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2025-12-21_224014.jpg", mini: "fotos/mini/2025-12-21_224014.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2025-12-23_183943.jpg", mini: "fotos/mini/2025-12-23_183943.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2025-12-26_183822.jpg", mini: "fotos/mini/2025-12-26_183822.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2025-12-26_212313.jpg", mini: "fotos/mini/2025-12-26_212313.jpg", w: 1200, h: 1600 },
    { archivo: "fotos/2025-12-27_184726.jpg", mini: "fotos/mini/2025-12-27_184726.jpg", w: 1200, h: 1600 },
    { archivo: "fotos/2025-12-27_185320.jpg", mini: "fotos/mini/2025-12-27_185320.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-01-10_105145.jpg", mini: "fotos/mini/2026-01-10_105145.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-01-10_184133.jpg", mini: "fotos/mini/2026-01-10_184133.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-01-10_195431.jpg", mini: "fotos/mini/2026-01-10_195431.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-01-10_201107.jpg", mini: "fotos/mini/2026-01-10_201107.jpg", w: 1200, h: 1600 },
    { archivo: "fotos/2026-01-10_201617.jpg", mini: "fotos/mini/2026-01-10_201617.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-01-10_203524.jpg", mini: "fotos/mini/2026-01-10_203524.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-01-11_172053.jpg", mini: "fotos/mini/2026-01-11_172053.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-01-11_172055.jpg", mini: "fotos/mini/2026-01-11_172055.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-01-12_131840.jpg", mini: "fotos/mini/2026-01-12_131840.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-01-12_132008.jpg", mini: "fotos/mini/2026-01-12_132008.jpg", w: 1200, h: 1600 },
    { archivo: "fotos/2026-01-12_172115.jpg", mini: "fotos/mini/2026-01-12_172115.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-01-12_215707.jpg", mini: "fotos/mini/2026-01-12_215707.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-05-16_102925.jpg", mini: "fotos/mini/2026-05-16_102925.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-05-17_130722.jpg", mini: "fotos/mini/2026-05-17_130722.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-05-23_123605.jpg", mini: "fotos/mini/2026-05-23_123605.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-05-23_123606.jpg", mini: "fotos/mini/2026-05-23_123606.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-05-23_171014.jpg", mini: "fotos/mini/2026-05-23_171014.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-05-24_183236.jpg", mini: "fotos/mini/2026-05-24_183236.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-05-24_183237.jpg", mini: "fotos/mini/2026-05-24_183237.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-05-24_200345.jpg", mini: "fotos/mini/2026-05-24_200345.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-05-30_111641.jpg", mini: "fotos/mini/2026-05-30_111641.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-05-30_162603.jpg", mini: "fotos/mini/2026-05-30_162603.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-07-04_113137.jpg", mini: "fotos/mini/2026-07-04_113137.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-07-05_061830.jpg", mini: "fotos/mini/2026-07-05_061830.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-07-05_084125.jpg", mini: "fotos/mini/2026-07-05_084125.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-07-05_084143.jpg", mini: "fotos/mini/2026-07-05_084143.jpg", w: 1200, h: 1600 },
    { archivo: "fotos/2026-07-05_084907.jpg", mini: "fotos/mini/2026-07-05_084907.jpg", w: 1200, h: 1600 },
    { archivo: "fotos/2026-07-10_155813.jpg", mini: "fotos/mini/2026-07-10_155813.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-07-10_164957.jpg", mini: "fotos/mini/2026-07-10_164957.jpg", w: 1200, h: 1600 },
    { archivo: "fotos/2026-07-10_181348.jpg", mini: "fotos/mini/2026-07-10_181348.jpg", w: 1600, h: 1200 },
    { archivo: "fotos/2026-07-11_151832.jpg", mini: "fotos/mini/2026-07-11_151832.jpg", w: 1600, h: 1200 }
  ]
};
