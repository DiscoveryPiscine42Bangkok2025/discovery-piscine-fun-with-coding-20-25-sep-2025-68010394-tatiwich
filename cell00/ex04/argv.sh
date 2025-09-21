
if ($args.Count -eq 0) {
    Write-Output ”No arguments were passed.“
} else {
    Write-Output ”Arguments passed to the script:“
    foreach ($arg in $args) {
        Write-Output $arg
    }
}
