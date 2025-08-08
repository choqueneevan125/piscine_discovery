#!/bin/bash

# Compter les fichiers réguliers
file_count=$(find . -maxdepth 1 -type f | wc -l)

# Compter les répertoires
dir_count=$(find . -maxdepth 1 -type d | wc -l)

# Calculer le nombre total (fichiers + répertoires)
total=$((file_count + dir_count - 1))  # -1 pour ne pas compter le répertoire courant

# Afficher la sortie avec cat -e format (fin de ligne avec $)
echo "$total"
