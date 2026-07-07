// ==UserScript==
// @name         优学院网课助手
// @namespace    https://ulearning.cn
// @version      3.7.0
// @description  全自动刷课：一键全自动→视频+答题+跳过所有页面
// @author       Reasonix
// @match        https://ua.ulearning.cn/*
// @match        https://courseweb.ulearning.cn/*
// @match        https://umooc.ulearning.cn/*
// @match        https://www.ulearning.cn/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @run-at       document-end
// @license      MIT
// ==/UserScript==

(function () {
  'use strict';

  const CFG = { AUTO_MUTE: true, POLL_MS: 3000, IDLE_MS: 45000 };
  const log = (m, lv) => { const c = { info: '#409EFF', ok: '#67C23A', warn: '#E6A23C', err: '#F56C6C' }; console.log('%c[助手]%c ' + m, 'font-weight:bold;font-size:13px', 'color:' + (c[lv] || '#333')); };
  const clean = s => (s || '').replace(/[\s\n\r\t]+/g, '').toLowerCase();
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const rand = (a, b) => Math.random() * (b - a) + a;
  const fmt = s => { if (!s || isNaN(s)) return '--:--'; const m = Math.floor(s / 60), sec = Math.floor(s % 60); return String(m).padStart(2, '0') + ':' + String(sec).padStart(2, '0'); };

  const QBank = {
    data: [],
    load() {
      try { this.data = JSON.parse(localStorage.getItem('ul_qbank') || '[]'); } catch { this.data = []; }
      if (!this.data.length) { try { this.data = JSON.parse(GM_getValue('qbank', '[]')); } catch {} }
    },
    save() { GM_setValue('qbank', JSON.stringify(this.data)); try { localStorage.setItem('ul_qbank', JSON.stringify(this.data)); } catch {} },
    find(q) {
      if (!q) return null;
      const cq = clean(q);
      return this.data.find(x => clean(x.question) === cq) || this.data.find(x => clean(x.question).includes(cq.substring(0, 20)) || cq.includes(clean(x.question).substring(0, 20))) || null;
    },
  };

  GM_addStyle('.ul-panel{position:fixed;top:60px;right:12px;width:260px;background:#fff;border-radius:10px;box-shadow:0 4px 20px rgba(0,0,0,.15);z-index:99999;font:13px/1.5 sans-serif;overflow:hidden}.ul-panel .h{background:#409EFF;color:#fff;padding:8px 12px;font-size:14px;font-weight:600}.ul-panel .b{padding:10px 12px}.ul-panel .r{display:flex;align-items:center;padding:5px 8px;margin:3px 0;background:#f5f7fa;border-radius:6px;font-size:12px}.ul-panel .btn{display:block;width:100%;padding:7px 0;margin:4px 0;border:1px solid #dcdfe6;border-radius:6px;background:#fff;color:#606266;font-size:12px;cursor:pointer;text-align:center}.ul-panel .btn.go{background:#67C23A;color:#fff;border-color:#67C23A}.ul-panel .btn.pause{background:#E6A23C;color:#fff;border-color:#E6A23C}');

  function start() {
    QBank.load();
    log('✨ 优学院助手 v3.7 就绪 | 题库:' + QBank.data.length + '条', 'ok');
    log('   点「▶ 一键全自动」开始', 'info');
  }
  setTimeout(start, 2000);
})();
