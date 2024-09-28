function keepGlitchAlive() {
  const url = 'https://your-glitch-project.glitch.me';  // GlitchプロジェクトのURLに置き換えてください
  const response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}
