<?php
        $number=5;
         for($a=$number;$a>0;$a--){
                for($i=1; $i<=$a; $i++){
                    echo " ";
                }
                if($i <= $a){
                        echo "";
                }
                for($a1=$number;$a1>=$a;$a1--){
                    echo "*";
                }
            echo "\n";
      }
