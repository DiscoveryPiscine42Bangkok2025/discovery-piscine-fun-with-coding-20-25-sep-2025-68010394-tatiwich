$files = (Get-ChildItem -File -Depth 1 | Measure-Object).Count
$dirs  = (Get-ChildItem -Directory -Depth 1 | Measure-Object).Count
Write-Output ”Regular files: $files, Directories: $dirs“
