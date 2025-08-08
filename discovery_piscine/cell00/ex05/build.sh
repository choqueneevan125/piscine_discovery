#!/bin/bash

# Vérifier si des arguments ont été fournis
if [ $# -eq 0 ]; then
  echo "No arguments supplied"
  exit 1
fi

# Pour chaque argument passé au script
for arg in "$@"; do
  # Ajouter 'ex' au début de chaque argument et créer le dossier
  DIR_NAME="ex$arg"
  mkdir "$DIR_NAME"

  # Vérifier si la création du dossier a réussi
  if [ $? -eq 0 ]; then
    echo "Le dossier $DIR_NAME a été créé avec succès."
  else
    echo "Erreur lors de la création du dossier $DIR_NAME."
  fi
done

