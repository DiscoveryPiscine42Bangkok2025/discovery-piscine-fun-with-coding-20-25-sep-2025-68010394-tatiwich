# build.ps1

if ($args.Count -eq 0) {
    Write-Output ”No arguments were passed.“
    exit
}

foreach ($arg in $args) {
    $folderName = ”ex$arg“
    New-Item -ItemType Directory -Name $folderName -Force | Out-Null
    Write-Output ”Created folder: $folderName“
}
