# LaTeX sourcecode of slides
SRC = Nicolas-Dubois-LT-SudWeb2011

# Directories:
PWD_DIR = `pwd`
SRC_DIR = src
BUILD_DIR = build

# ---------------------------------------------------------------------------- #

# LaTeX flags
LATEXFLAGS = -interaction=nonstopmode
PDFLATEXFLAGS = --output-directory=$(BUILD_DIR)

# how the resulting files should be named
SLIDES_SRC = $(SRC)-slides
HANDOUT_SRC = $(SRC)-handout
NOTES_SRC = $(SRC)-notes

# normally we just want to create the slides
pdf:    $(SRC_DIR)/$(SRC).tex
	pdflatex $(PDFLATEXFLAGS) $(SRC_DIR)/$(SRC).tex
	pdflatex $(PDFLATEXFLAGS) $(SRC_DIR)/$(SRC).tex
	cp $(BUILD_DIR)/$(SRC).pdf $(PWD_DIR)/

view:   pdf
	evince $(SRC).pdf

read:	pdf
	acroread $(SRC).pdf

edit:
	gedit $(SRC_DIR)/$(SRC).tex &

all:	pdf view
