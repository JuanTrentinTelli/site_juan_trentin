function iconSun() {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
}

function iconMoon() {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
}

function updateThemeIcon(theme) {
  var icon = document.getElementById('theme-icon');
  if (icon) icon.innerHTML = theme === 'dark' ? iconSun() : iconMoon();
}

function initTerminal() {
  var wrapper  = document.getElementById('terminal-wrapper');
  var outputEl = document.getElementById('terminal-output');
  var inputEl  = document.getElementById('terminal-input');

  if (!wrapper || !outputEl || !inputEl) return;

  var commands     = SiteData.commands;
  var commandNames = SiteData.commandNames;
  var history      = [];
  var historyIdx   = -1;

  welcome();
  wrapper.addEventListener('click', function () { inputEl.focus(); });

  inputEl.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      var raw = inputEl.value.trim();
      inputEl.value = '';
      historyIdx = -1;
      if (!raw) return;
      history.unshift(raw);
      printPromptLine(raw);
      run(raw.toLowerCase());

    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIdx < history.length - 1) {
        historyIdx++;
        inputEl.value = history[historyIdx];
      }

    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        historyIdx--;
        inputEl.value = history[historyIdx];
      } else {
        historyIdx = -1;
        inputEl.value = '';
      }

    } else if (e.key === 'Tab') {
      e.preventDefault();
      var partial = inputEl.value.toLowerCase();
      if (!partial) return;
      var match = commandNames.find(function (c) { return c.startsWith(partial); });
      if (match) inputEl.value = match;
    }
  });

  function run(cmd) {
    if (cmd === 'clear') {
      outputEl.innerHTML = '';
      return;
    }
    if (cmd === 'theme') {
      var next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
      document.documentElement.dataset.theme = next;
      localStorage.setItem('theme', next);
      updateThemeIcon(next);
      print('<span class="t-accent">tema: ' + next + '</span>');
      return;
    }
    if (commands[cmd]) {
      print(commands[cmd]);
    } else {
      print('<span class="t-dim">comando não encontrado: <span class="t-white">' + esc(cmd) + '</span> — tente <span class="t-accent">help</span></span>');
    }
  }

  function printPromptLine(cmd) {
    var line = document.createElement('div');
    line.className = 't-output-line';
    line.innerHTML = '<span class="t-prompt">juan@ghostopcode</span><span class="t-dim">:~$</span> ' + esc(cmd);
    outputEl.appendChild(line);
  }

  function print(html) {
    var block = document.createElement('div');
    block.className = 't-output-line';
    block.innerHTML = html;
    outputEl.appendChild(block);
    var body = outputEl.closest('.terminal-body');
    if (body) body.scrollTop = body.scrollHeight;
  }

  function welcome() {
    print('<span class="t-accent">juan@ghostopcode</span> <span class="t-dim">— portfolio terminal v1.0</span>\n<span class="t-dim">────────────────────────────────────────</span>\nDigite <span class="t-accent">help</span> para ver os comandos disponíveis.\n');
  }

  function esc(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}
