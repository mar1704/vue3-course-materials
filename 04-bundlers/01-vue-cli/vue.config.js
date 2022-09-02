module.exports = {
  // Не используем eslint-loader
  // Не линтим проект по время сборки, линтим только отдельной командой и через IDE
  // Так сборка будет быстрее
  lintOnSave: false,

  // Настройка сервера разработки
  devServer: {
    // Настройка проксирование запросов
    proxy: {
      // Проксируем все запросы, которые уходят на API_URL
      [process.env.VUE_APP_API_URL]: {
        // Проксируем на API_PROXY_TARGET
        target: process.env.API_PROXY_TARGET,
      },
    },
  },
};
