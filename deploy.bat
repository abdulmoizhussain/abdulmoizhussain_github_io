REM https://www.windows-commandline.com/batch-file-echo/
@echo off

cd ..

robocopy /MOVE .\abdulmoizhussain.github.io\.git\ .\abdulmoizhussain_github_io\build\.git\
robocopy /MIR .\abdulmoizhussain_github_io\build\ .\abdulmoizhussain.github.io\

cd abdulmoizhussain.github.io

git add --all

REM enter user input
REM https://stackoverflow.com/questions/1223721/in-windows-cmd-how-do-i-prompt-for-user-input-and-use-the-result-in-another-com
set /p commit_message="Enter Commit Message: "

echo.

git commit -m "%commit_message%"
git push

cmd /k cd ..
