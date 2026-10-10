// data.js - now placeholder only
// Actual race data now comes from Bathurst_500-1000_Results.xlsx -> race-results-data.js (1963-2026 main, 2,917 entries) + early-results-data.js (1960-62 Phillip Island, 111 entries, kept separate)
// This file only provides empty defaults if race data hasn't loaded yet - do not overwrite existing STATS_DATA
if (typeof ALL_YEARS === 'undefined') window.ALL_YEARS = {};
if (typeof STATS_DATA === 'undefined') window.STATS_DATA = [];
if (typeof SUPER_TOURING_RESULTS === 'undefined') window.SUPER_TOURING_RESULTS = [];
if (typeof PRE_1963_RESULTS === 'undefined') window.PRE_1963_RESULTS = [];
console.log('data.js placeholder loaded - waiting for race-results-data.js (Bathurst_500-1000_Results.xlsx) and early-results-data.js');
