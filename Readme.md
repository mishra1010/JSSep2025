# Day 1 - Introduction

Use JS in html
- Script tag

Browser downloads and executes html and prepares DOM, then downloads scripts and then executes the script. If script gets downloaded fast and html execution is still in progress, we get errors as we might not have reach the declarations in html.

Ex - script tag is in head which performs an activity on a variable

HTML execution is in progress while script execution starts but it fails as it could not find the variable during execution by the browser.

For this we add script tag at the end of body in html or we can use async (used for third party libraries which needs to be download on the background) which will solve the issue but not completely  and then defer which will wait to execute the js only after the html executes all the lines.

# Day 2 - Variables