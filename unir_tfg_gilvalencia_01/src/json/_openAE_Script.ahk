#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

#Persistent

#Include %A_ScriptDir%\_WatchFolder.ahk

WatchFolder("C:\Users\gilva\Projects\unir_tfg_gilvalencia_01\src\json", "myFunc", , Watch := 1)
return

myFunc(path, changes) {
    for k, change in changes
        ; 1 means new file was added
        if (change.action = 1 || change.action = 2 || change.action = 3 || change.action = 4 || change.action = 5 || change.action = 8 || change.action = 16 || change.action = 32 || change.action = 64) {
            gosub doStuff
            return
        }
}

doStuff:
; commands you want to execute
Run, C:\Users\gilva\Projects\unir_tfg_gilvalencia_01\ae_projects\open_ae_script.cmd
; C:\Users\gilva\Projects\unir_tfg_gilvalencia_01\ae_projects\open_ae_script.cmd
; C:\Program Files\Adobe\Adobe Photoshop 2022\Photoshop.exe
return
