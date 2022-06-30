document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-c4fdeba9c558.css">')
document.write('<div id=\"gist113807440\" class=\"gist\">\n    <div class=\"gist-file\" translate=\"no\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-twitchtokenresponsevalidator-ts\" class=\"file my-2\">\n    \n    <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-typescript  \">\n\n        \n<div class=\"js-check-bidi js-blob-code-container blob-code-content\">\n\n  <template class=\"js-file-alert-template\">\n  <div data-view-component=\"true\" class=\"flash flash-warn flash-full d-flex flex-items-center\">\n  <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path fill-rule=\"evenodd\" d=\"M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z\"><\/path>\n<\/svg>\n  \n    <span>\n      This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.\n      <a href=\"https://github.co/hiddenchars\" target=\"_blank\">Learn more about bidirectional Unicode characters<\/a>\n    <\/span>\n\n\n  <div data-view-component=\"true\" class=\"flash-action\">      <a href=\"{{ revealButtonHref }}\" data-view-component=\"true\" class=\"btn-sm btn\">  Show hidden characters\n  \n<\/a>\n<\/div>\n<\/div><\/template>\n<template class=\"js-line-alert-template\">\n  <span aria-label=\"This line has hidden Unicode characters\" data-view-component=\"true\" class=\"line-alert tooltipped tooltipped-e\">\n    <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path fill-rule=\"evenodd\" d=\"M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z\"><\/path>\n<\/svg>\n<\/span><\/template>\n\n  <table class=\"highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file\" data-tab-size=\"8\" data-paste-markdown-skip data-tagsearch-lang=\"TypeScript\" data-tagsearch-path=\"TwitchTokenResponseValidator.ts\">\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L1\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"1\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>import<\/span> <span class=pl-kos>{<\/span> <span class=pl-smi>TwitchTokenDetails<\/span> <span class=pl-kos>}<\/span> <span class=pl-k>from<\/span> <span class=pl-s>&#39;./../models/twitchTokenDetails.models&#39;<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L2\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"2\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>import<\/span> <span class=pl-kos>{<\/span> <span class=pl-s1>validate<\/span> <span class=pl-kos>}<\/span> <span class=pl-k>from<\/span> <span class=pl-s>&quot;class-validator&quot;<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L3\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"3\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>import<\/span> <span class=pl-kos>{<\/span> <span class=pl-smi>InvalidTwitchResponseError<\/span> <span class=pl-kos>}<\/span> <span class=pl-k>from<\/span> <span class=pl-s>&#39;../models/error.model&#39;<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L4\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"4\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>export<\/span> <span class=pl-k>class<\/span> <span class=pl-smi>TwitchTokenResponseValidator<\/span> <span class=pl-kos>{<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L5\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"5\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC5\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L6\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"6\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC6\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-k>public<\/span> <span class=pl-k>static<\/span> <span class=pl-k>async<\/span> <span class=pl-en>parseResponse<\/span><span class=pl-kos>(<\/span><span class=pl-s1>responseBody<\/span>: <span class=pl-smi>string<\/span><span class=pl-kos>)<\/span>: <span class=pl-smi>Promise<\/span><span class=pl-kos>&lt;<\/span><span class=pl-smi>TwitchTokenDetails<\/span><span class=pl-kos>&gt;<\/span> <span class=pl-kos>{<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L7\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"7\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC7\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-k>var<\/span> <span class=pl-s1>tokenResponse<\/span> <span class=pl-c1>=<\/span> <span class=pl-smi>JSON<\/span><span class=pl-kos>.<\/span><span class=pl-en>parse<\/span><span class=pl-kos>(<\/span><span class=pl-smi>JSON<\/span><span class=pl-kos>.<\/span><span class=pl-en>stringify<\/span><span class=pl-kos>(<\/span><span class=pl-s1>responseBody<\/span><span class=pl-kos>)<\/span><span class=pl-kos>)<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L8\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"8\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC8\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L9\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"9\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC9\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-k>try<\/span> <span class=pl-kos>{<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L10\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"10\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC10\" class=\"blob-code blob-code-inner js-file-line\">            <span class=pl-smi>console<\/span><span class=pl-kos>.<\/span><span class=pl-en>info<\/span><span class=pl-kos>(<\/span><span class=pl-s>&quot;Validating Twitch Response&quot;<\/span><span class=pl-kos>)<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L11\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"11\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC11\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L12\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"12\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC12\" class=\"blob-code blob-code-inner js-file-line\">            <span class=pl-k>let<\/span> <span class=pl-s1>tokenDetails<\/span> <span class=pl-c1>=<\/span> <span class=pl-k>new<\/span> <span class=pl-smi>TwitchTokenDetails<\/span><span class=pl-kos>(<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L13\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"13\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC13\" class=\"blob-code blob-code-inner js-file-line\">                <span class=pl-s1>tokenResponse<\/span><span class=pl-kos>.<\/span><span class=pl-c1>access_token<\/span><span class=pl-kos>,<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L14\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"14\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC14\" class=\"blob-code blob-code-inner js-file-line\">                <span class=pl-s1>tokenResponse<\/span><span class=pl-kos>.<\/span><span class=pl-c1>refresh_token<\/span><span class=pl-kos>,<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L15\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"15\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC15\" class=\"blob-code blob-code-inner js-file-line\">                <span class=pl-s1>tokenResponse<\/span><span class=pl-kos>.<\/span><span class=pl-c1>expires_in<\/span><span class=pl-kos>,<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L16\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"16\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC16\" class=\"blob-code blob-code-inner js-file-line\">                <span class=pl-s1>tokenResponse<\/span><span class=pl-kos>.<\/span><span class=pl-c1>scope<\/span><span class=pl-kos>,<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L17\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"17\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC17\" class=\"blob-code blob-code-inner js-file-line\">                <span class=pl-s1>tokenResponse<\/span><span class=pl-kos>.<\/span><span class=pl-c1>token_type<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L18\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"18\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC18\" class=\"blob-code blob-code-inner js-file-line\">            <span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L19\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"19\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC19\" class=\"blob-code blob-code-inner js-file-line\">            <span class=pl-k>let<\/span> <span class=pl-s1>completeConfigErrors<\/span> <span class=pl-c1>=<\/span> <span class=pl-k>await<\/span> <span class=pl-en>validate<\/span><span class=pl-kos>(<\/span><span class=pl-s1>tokenDetails<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L20\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"20\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC20\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L21\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"21\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC21\" class=\"blob-code blob-code-inner js-file-line\">            <span class=pl-k>if<\/span> <span class=pl-kos>(<\/span><span class=pl-s1>completeConfigErrors<\/span><span class=pl-kos>.<\/span><span class=pl-c1>length<\/span> <span class=pl-c1>&gt;<\/span> <span class=pl-c1>0<\/span><span class=pl-kos>)<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L22\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"22\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC22\" class=\"blob-code blob-code-inner js-file-line\">                <span class=pl-k>throw<\/span> <span class=pl-k>new<\/span> <span class=pl-smi>InvalidTwitchResponseError<\/span><span class=pl-kos>(<\/span><span class=pl-s>\`The answer from twitch token endpoint is not valid, <\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L23\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"23\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC23\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s>                here are the issues: <span class=pl-s1><span class=pl-kos>\${<\/span><span class=pl-s1>completeConfigErrors<\/span><span class=pl-kos>.<\/span><span class=pl-en>join<\/span><span class=pl-kos>(<\/span><span class=pl-kos>)<\/span><span class=pl-kos>}<\/span><\/span>\`<\/span><span class=pl-kos>)<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L24\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"24\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC24\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L25\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"25\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC25\" class=\"blob-code blob-code-inner js-file-line\">            <span class=pl-smi>console<\/span><span class=pl-kos>.<\/span><span class=pl-en>info<\/span><span class=pl-kos>(<\/span><span class=pl-s>&quot;Twitch Response is valid.&quot;<\/span><span class=pl-kos>)<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L26\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"26\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC26\" class=\"blob-code blob-code-inner js-file-line\">            <span class=pl-k>return<\/span> <span class=pl-s1>tokenDetails<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L27\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"27\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC27\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L28\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"28\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC28\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-kos>}<\/span> <span class=pl-k>catch<\/span> <span class=pl-kos>(<\/span><span class=pl-s1>err<\/span>: <span class=pl-smi>unknown<\/span><span class=pl-kos>)<\/span> <span class=pl-kos>{<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L29\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"29\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC29\" class=\"blob-code blob-code-inner js-file-line\">            <span class=pl-k>if<\/span> <span class=pl-kos>(<\/span><span class=pl-s1>err<\/span> <span class=pl-k>instanceof<\/span> <span class=pl-smi>InvalidTwitchResponseError<\/span><span class=pl-kos>)<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L30\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"30\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC30\" class=\"blob-code blob-code-inner js-file-line\">                <span class=pl-smi>console<\/span><span class=pl-kos>.<\/span><span class=pl-en>log<\/span><span class=pl-kos>(<\/span><span class=pl-s1>err<\/span><span class=pl-kos>.<\/span><span class=pl-c1>message<\/span><span class=pl-kos>)<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L31\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"31\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC31\" class=\"blob-code blob-code-inner js-file-line\">            <span class=pl-k>throw<\/span> <span class=pl-s1>err<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L32\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"32\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC32\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-kos>}<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L33\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"33\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC33\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-kos>}<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-twitchtokenresponsevalidator-ts-L34\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"34\"><\/td>\n          <td id=\"file-twitchtokenresponsevalidator-ts-LC34\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-kos>}<\/span><\/td>\n        <\/tr>\n  <\/table>\n<\/div>\n\n\n    <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/PedroEFLourenco/0fce67fe2b2cdf21032d4a2984bdb355/raw/c0f42931a3782a22759b17117f4c54ea3e677a81/TwitchTokenResponseValidator.ts\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/PedroEFLourenco/0fce67fe2b2cdf21032d4a2984bdb355#file-twitchtokenresponsevalidator-ts\">\n          TwitchTokenResponseValidator.ts\n        <\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
