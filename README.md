# WebShop
  
1. Rejestracja do serwisu  
1.1 Widok rejestracji  
2. Logowanie do serwisu  
2.1 Widok logowania  
3. Boczne menu nawigacyjne  
4. Lista artykulow  
4.1 Utworzenie modelu danych sprzedawanych artykułów  
	a) ManufacturerList  
  
	b) Manufacturer  
	Fields: manufacturer, manufacturer_logo  
  
	c) Board  
	Fields: description, image, long_description, manufacturer, manufacturer_logo, name  
  
	d)BoardTypes  
	Fields: board_type  
  
	e) BoardSize  
	Fields: length, sail_max, sail_min, volume, width  
  
4.2 Utworzenie kontrolera pobierajacego liste dostępnych artykułów (EntityFramewortkCore)  
4.3 Kontroler pobierajacy artykuły danej kategorii  
4.4 Kontroler pobierający tylko dostępne artykuły danej kategorii  
4.5 Widok wyswietlajacy artykuły danej kategorii  
4.6 Widok wyswietlajacy tylko dostępne artykuły danej kategorii  
5. Widok detali wybranego artykulu  
6. Koszyk  
6.1 Widok koszyka z mozliwoscia dodawania i odejmowania elementow w koszyku  
7. Widok zamowienia  
8. Realizacji zamowienia  
8.1 Kontroler realizacji zamowienia  
9. Dodanie mozliwosci logowania za posrednictwem konta GMail i Facebook  
10. Wysylanie e-maila z powiadomieniem o zlozonym zamowienia  
11. Wysylanie e-maila z weryfikacja zalozonego konta  
12. Galeria z mozliwoscia glosowania i komentowania  
12.1 Kontroler glosowania  
12.2 Kontroler dodawania komentarzy  
13. Widok administratora  
13.1 Mozliwosc dodawania artykułów wraz ze zdjeciem  
13.2 Mozliwosc odejmowania artykułów  
13.3 Widok historii zamowień przez poszczególnych urzytkowników  
14. Integracja z systemem płatności  
15. Blog  
15.1 Widok z wyswietlaniem wpisów  
15.2 Widok z mozliwoscia dodawania wpisow wraz ze zdjeciem  
16. Captcha  
17. Licznik odwiedzin  
17.1 Integracja z Google analitycs  
18. Dodawanie komentarzy pod wybranym artykułem  
19. Śledzenie statusu wysyłkia artykułu  
20. Wirtualne przechodzenie po sklepie  
  
## Dokumentacja  

1. [Dodawanie nowego komponentu](Documentation/Komponent.md)  
2. [Dodanie EntityFramewortkCore i Context](Documentation/EFCore.md)  
3. [Dodanie kontrolera](Documentation/Controler.md)  

## Skrypty SQL:  
[Utworzenie tabeli Boards](Documentation/SQL/BoardsDbTableCreate.sql)  

## Tutoriale oraz przydatne linki:  
[Plik z linkami do tutoriali](Documentation/Tutorial.md)  
