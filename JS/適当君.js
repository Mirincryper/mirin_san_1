'use strict';

{
    const botan = document.getElementById("botan");

        botan.addEventListener('click', () => {
            const n = Math.floor(Math.random() * 3)
            botan.textContent = n;
            
            switch(n){
                case 0:
                    botan.textContent = "<(^o^)>┌┛’,;’;≡三ﾄﾞｶｧｯ@○○" ;
                    break;
                case 1:
                    botan.textContent = "✌(՞ਊ՞✌三✌՞ਊ՞)✌" ;
                    break;
                case 2:
                    botan.textContent = "(◜◡‾)うるせーｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗ今何時だと思ってるんだｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗ静かにしやがれｗｗｗｗwwwwwwwwwwww"
                    break;
                case 3:
                    botan.textContent ="=͟͟͞͞ ( ͡° ͜ʖ ͡°)"
                    break;
            }
        });
}
