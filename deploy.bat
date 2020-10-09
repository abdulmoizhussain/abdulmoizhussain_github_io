REM https://www.windows-commandline.com/batch-file-echo/
@echo off

git clone https://github.com/abdulmoizhussain/abdulmoizhussain.github.io.git abdulmoizhussaingithubio
robocopy /MOVE .\abdulmoizhussaingithubio\.git .\build\.git
robocopy /MIR .\build\ .\abdulmoizhussaingithubio\
cd build

git add --all

REM enter user input
REM https://stackoverflow.com/questions/1223721/in-windows-cmd-how-do-i-prompt-for-user-input-and-use-the-result-in-another-com
set /p commit_message="Enter Commit Message: "

git commit -m %commit_message%
git push

cd ..
cmd /k rmdir /s /q .\abdulmoizhussaingithubio
