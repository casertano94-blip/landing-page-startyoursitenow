/* ============================================
   SCRIPT.JS - Start Your Site Now Landing Page
   ============================================ */

function trackEvent(eventName, params = {}) {
  if (typeof fbq !== 'undefined') {
    fbq('track', eventName, params);
  }
}

const BRAND_NAME = 'startyoursitenow';
const BRAND_LOGO = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAUEBAUEAwUFBAUGBgUGCA4JCAcHCBEMDQoOFBEVFBMRExMWGB8bFhceFxMTGyUcHiAhIyMjFRomKSYiKR8iIyL/2wBDAQYGBggHCBAJCRAiFhMWIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiL/wAARCAFAAUADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD4yooooAKKKKACiiigAooooAKKKKACiinpG0h+UZ96AGUAZPFW0tQPvnPsKsKioPlUCrVNvcdiitvI3bA96lW0/vN+Qq3RVqCAgFtGOxP1NSCJB0UflT6KqyAQADoBS0UUwCkwD1ApaKAGGND1Rfyphtoz/Dj6GpqKVkBVa0H8LfmKia3kXtke1X6KlwQGWRg80lajKrDDKD9arvaqeUOPY1DpvoFinRT3ieP7w49aZUCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACnIjO2FGTUsVuX5bhf1NXFUIMKMCrjBsZDHaqvL/MfTtU4GBjtS0VqklsAdKKKKYBRRSUALRSUtABRRRQAUUUUAFFFFABRRRQAtJRRQAYzweRVeS1VuU+U+narFGaTSe4GY6MjYYYNNrUZQ64YZFUpbcpynK/yrKUGthEFFFFQAUUUUAFFFFABRRQAUUUUAFFFFABRRSgEnA5NACd6uQ24XDScn09KdDCI+W5f8AlU1axh1YxaKKK1AKKKKQBRSUUAFFFFABS0lFABRRRQAUUUUAFFFLQAUUlFAC0UlFABS0lFAC0UlFAFea3DZaPr6etU61KhmgEg3Lw/8AOs5Q6oCjRSkEEg8EUlZCCiiigAooooAKKKKACiiigAq9BD5Y3N94/pTLaHo7dewqzWsI9WMKWiitACiiimAUUUUgEpKWigAooooAKKntLO5v7gQWVvLPMeiRKWNdlpnwx1e82tfSwWKHsx3v+Q4/WuihhK+If7qDf9d9ilFvY4aivZ7L4T6RGB9tvL25buFKxj9AT+tbUPw18LoMHT3c+r3Dn+tenDIMY1rZfP8AyuWqUj5+or6Fb4a+FpOP7Odc/wBy4cf1rPuvg/oM6k2l1f2rf76yD8iP60TyDFx2s/n/AJpB7GR4VS16Rqfwg1e33NpV3bXyDojfun/XI/WuD1HSr/SLnyNUs57WXssqEZ+h6H8K82vhK+H/AIsWvy+/Yhxa3KVFFFcxIUUVvaH4Q1vxF82lWLvBnBuJPkjH/Aj1/DNXCEqkuWCuxpN7GDRXsGnfBU7Q2sasA3eO0jz/AOPN/hXMfEXwrpnhW70yDS2uGa4id5TO4bOCAMYAx3rsq5biaNJ1akbIt05JXZwtFLRXAZhRSUtAEM8PmDcv3h+tUa1KrXMPHmL+I/rWc49UBUooorIQUUUUAFFFFABU0EXmPk/dHWolBZgB1NaMaCNAo/8A11cI3YDsUtFFbDCiiigAopaSgApKWkoAKKKlt7eW7uo7e2jaSaVtqIvUmmk27ICNVZ3CopZmOAqjJJ9AK9B8PfDqW42XGvs0MZ5FrGfnP+8f4foOfpXQeFvCdvoSLcT7ZtRI5l7R+y/41c8QeMLLw+hjI+0X5GVt0P3fdj2H619Rg8oo4en9Yxz+X+fd+S/E3jTSV5HQWVlZ6TZeVZww2tvGMttAUfVj3+prA1H4iaHppKQSPfSj+G2Hy/8AfR4/LNeT614j1LXpS2oXBMQPywJ8sa/h3+pzWRUYniFpcmFjypdX+i2X4idX+U9Iuvi1qLEjT9PtYB2aVjIf6CsqT4m+JnPy3kMf/XO3T+oNcZS15E8zxlR3dR/LT8iHUk+p2UfxM8URtn7fG/s9uh/pWxZfGDV4WUX9lZ3KDqU3RN/UfpXmtFKGY4uDuqj++/5gqkl1PfdJ+K2gagVjvfO02U95xuT/AL6Xp+IFaXjXW9OtfAtzdyi0voZx5Vsj4kSRyOMfTqSPSvnDNLubywm5tgO4LngH1x613LPa7pShNJtrf+tC/bO1mN6CrVhp91ql/FZ6dA9xcynCRoOfqfQe54qXSNIvNd1aDT9Mi825mPAPAUd2Y9gPWvpHwl4RsfCWlmC1US3coH2i6ZcNIfQeijsPz5rky/Lp4yXaK3f6ImnTc/Q5nwp8KNP0tIrrX9l/fDnyOsMR+n8Z9zx7V6SFAVVVQqqMBQMAD2FcDqfxX8P6bqbWkX2m8VG2vNboCgPfBJG78K6/SdYsdd02O+0mcT2z5G4DBBHVSD0I9K+rwX1Onelh2rrfv/wTpjyrSJeIzXz98Xr4XPjsW6nK2Vskf0Y5Y/zFe/ySxwQyTTsFhiUu7HsoGSfyr5P1rU31nX7/AFKTO67maQA9gTwPwGBXDxBW5aMaXVv8ERXfu2M80UUV8icolFLRQAUUUUAUZ4vLfI+6elQ1pOgkjKn8DWcwKsQeorGcbMQlFFFQAUUU5VLuFHU0AWLWPgufoKtCkVQqgDoKdXRFWVhhR2oopgFFFFAC0lFFABSUUUAH4V6v4R8Oro9oLi6Qfb51+bP/ACyX+6Pf1/KuU8FaOLzUDfXC5gtT8gPRpO35dfriu28Qa4uiaO8ow11IdkCnu3qfYdfyr6XJ8LTo03jK2y2/z/RG0EkuZlPxZ4t/sZDZacynUHHzP1EIPf8A3vQduteVu7yyNJIzO7nLMxySfUmlkkeaV5JXZ5HJZmY5JJ70yvIx+PqY2pzS0S2Xb/gkSk5MKKWlrhIEooooAKKKkhgluZ0ht43lmkOERFyzH2FNK+iAjpVRndUjVndyFVVGSxPQCu+0r4V6texrJqFxBYKf4G/eP+IHA/Ou18M/DWy0LW4dRnvZLySAExI0QRVf+91Ocdq9Shk2LqtXhZPq/wDLc0VOTNvwH4Rj8KaKDOqtqt0A1zJ12+kYPoO/qfwrf15LifwxqkVgT9sktZFi29dxU4A96sq2KkV8civsoYaFOj7GGitY6kklZHyGBtGCCuOMEdPavavgrFdLperzPuWxkmQR56M4B3EfgVFdjqHgjw7quoPfX2lwvcucuylk3n1YKQDWhfX2neGPDz3MqpbWFmmFiiUKPZFHqTXiYHKJYOt7epNcsb/0zKFPld2zj/iz4kGm+HF0i2f/AErUhiQDqkIPP/fR4+ma8ErU17WrnxDrlzqV6f3s7cIDxGo+6o9gKy68HMMW8XXc+my9DGpLmdwooorhICiiigApKWigAqtdR8Bx9DVmkIDKQehFKSurAZlFOZSjlT1FNrnEFWrRMlnPbgVVrRiXZEo796uCuwRIKKKK2GFFFFAAaSlooAKKKKAEpQCzAKMsTgD1NFa/hq2F14itgwykRMp/Dp+uK0o03VqRgursNK7PStHsV03Sra0TGUX5z6seSfzrzjxPqp1XXJWVswQfuoh2wOp/E/0rvdavjYaDdzqcSbNqH/abgfzrycDHFe/nddQhDDQ23+WyNKj0sFFFLXzhkFFFFABRRRTAkhhkubiOC3QvNKwREHUk9K9s8K+HLfw5adFk1CQfvp//AGVfRf51wvg63s9MQ6rqs8MRkBW38xgCo7tj36D8a6ebx/o1uSqyTzkd4ouD+JxX1GT0cNhYfWMRJKT2Tey7/P8AI3ppLVnfwze9XUk4rhfDvi218QXc0Nnb3EZhTezSgYxnHY11cU3I5r6ilWp14c9N3RsmnsawkqVWqgr1OkmAT6DOKbRRNd31vp9jNeX0yQ20K7nkc8Af57V88+N/Gc/ivUgI98WmW5P2eE9T/tt/tH9B+NReLvGd74qvcPmDTo2zDaBsgH+8x7t/LtXMojyyrHGrPI5wqqMlj6Ad6+JzTNXiX7KlpD8/+Ac1SpzaIZRXQar4P1fRNCh1HVYBbpNKI1hY/vBkEgsO3Tp1rn68epTnTdpqzMmmtwooorMQUUUUAFFHeigAooooAq3acq478GqtaMq74mXv2rOrGasxEkK75VFaFVLRfnY+gxVurprQaFopKKsAooooAWikooAWkoooAK6vwXGPtd5Kf4UVR+Jz/SuVrrvB+Bb3h7l1/ka9DK1fFRv5/kXDct+NJyul2sIPEkpY/gP/AK9cNXWeM2JNgOwDn+VclTzWTlipeVvyCfxBS0lLXnEBRRRQAtJRRQAUUV0HhDwpeeMPEUWnWeUiHz3NxjIhj7t9ewHc1UISnJRirtjSbdkLodj4gtNOm8RaPbymws5BHPKBlT3II7qOMntkdK9L0zxrpN5pn2ue5jtHTCyQyt8wb2/vD3re+IesWngj4fx6DoIEBlT7NCoPzBT99j6nB5Pq1fOh4QgDoK96OKq5RJU4PmurtPZPy/r/AIGzfs3ZH01DMCoOeDTr69Sz0m8uZG2rBA75+ik1mWMpa0g3nLeWufyFch8R/ES2+lf2NbuDcXOGnwfuR9QD7k4/Ae9fV43Exw+HlVl209ehq5WVzyUEkAt17123wuuBB8QbZSobzoZIxkcg7cgj/vmuKrp/h+xX4h6MR/z2I/8AHGr8+wUuXE035r8zlh8SPXvibbC5+Hd+xGfIeOUH0w4H8ia+ea+kvHWG+HmuA/8APsT+or5tHSvV4ijbFRfeP6s0rfEFFFLXgGIlFFFABRRRQAUlLRQAVnzLtmYDpmtCql2vzK3qMVFRaAyS2XEOfU1PUcIxCo9qkqo7AFFLRTASloooAKKKKAEpaKKACun8Jvj7Ync7W/nXMVs+HZ/K1Up/z1Qr+I5rswE+TERf9alR3NLxcuYLJx2Zl/QH+lcpXa+II/P0VyOWiYP+HQ/zriq1zONsQ5d7f5DnuFJS0V5xAUUUUAFLSVf0jR77XtXg07Sbdri7nOFRegHdiewHc00m3ZDHaLot94h1q303SYfOu5zhR0CjuzHso7mvqHQdB074feFRZ2pU3LjfcXT8GV8csfRR2HYfjTPB/g/T/AHh1sMk+pTLm6uscyH+6vog/Xqa82+KnjF2tTpcEmLi6GZsH7kXp9W/kPevqMFg4YCi8VX3XT9Pn1OmMVSjd7nnfjPxG/ibxPPd72a2j/d24P8AcB6/Unn8qwYYjNcxRAZMjhQPqcVHUkM0lvcRzQttkjYMrehHQ185Oq6tV1KnV6nM3d3Z6v4g8WRaFbG2syst+RhU6iIdi39BXlE88t1cyTXEjSTSNud2OSx9aa7tI7PIxZ2OWZjkk+pptdWPzCpjZ3lpFbL+upUpOQV1nw4gM/xC07AJEQeQ/gh/xrk69L+EVg0msajqDD5IIRCrf7THJ/Rf1qctpupi6cV3T+7UIK8kd98QZ/J+Hernp5iLGPxdRXztXtXxcv8AyfC1nZKcG6udxHqEGf5kV4pXdxBU5sXy9kv8/wBSqz94KWikrwzIKKKKACiiigAooooAKhuhmHPoamqOYZhce1KWqAeowoHtTqBS0wEopaTtQAUtJRQAUUUhpgLRRS0AJU1vMbe6ilXrGwaoqKcW07oZ32+OeAj70cq/mCK4W4ga2uZIZPvI2Pr710GiXnmWpt2Pzxfd91/+tTNdszJGLtOqDbIPbsa9fFJYiiqsd1/TLlqrnO0UUV45AUUV2vgj4dap4znEqZtNJRsSXsi5B9VjH8R/Qdz2q6dKdSXLBXY1Ft2Rg+HfDepeKdYTT9Hg82U8u7cJEv8Aec9h+p7V9P8AhHwdpfgLRStt++vZgPtN2ww8p9B/dUdh+Jya0NE0XSPB2irY6VAIo+rEnMkzf3nbv/Idqwta1wYmaWVUijUmWQnCqo649q+uyvKFS9+pv+C/rudUKahq9zP8ZeKotM0+a9nYPGnyxxg481+yj2/+ua+br69n1HUJ7y7ffPOxdz7+g9h0ra8W+JZPEWq7k3LYwZW3jPp3Y+5/QcVzteNnGYLFVOSn8EdvPz/yMKk+ZhRRRXjGQUlFFAB0BJ6V9B+AdHbRfCFskq4uLn/SJQeoLdB+C4rybwN4d/t/xArTrmxsyJJiejH+FPxPX2Br2fX9bTw/oF1qEuC0a4iQ/wAch+6Pz5+gNfUZDhlTjLGVNElp+r/T7zekre8zyb4n6sNR8ZNbxNuh0+MQ+288v+uB+FcRTpJHmmklmYvLIxd2Pck5JptfPYmu69aVV9WZSd3cSiiisCQooooAKKKKACkpaKACkYZQj2oo7UAOFLTFOUB9qdQAtFJRQAtAozQKACkpaSmAUUUUAFFFFICa2uHtbhJY/vKenqPStoa9E6kSwMMjBAIINc/ShSzhVBLMcAAZJropYipTVovQabQ6UxmZjArLGT8oY5Ip9raXF9dx21lBJPcSnCRRKWZj7AV23h34ZanqxSbUz/Z1oeSHGZWHsvb8fyr1/QtN0XwlamHSoFWVhh5T80sn+839OB7V6WDyXEYl80lyx/rZGsaTlucn4M+DaRtHfeMCsjD5l06NsqP+ujDr/ujj1Jr1qTUoLKBYLNIwkS7VVAFSNR2AHFc5d64Sv719kZ6IvU1g3WovMCHYRwDkgnAx6k19ZhMso4aNkjoSUFZGvqOrtcMwickfxyE9R/hXivjXxb/aznT9Of8A0CNvnkH/AC2Yf+yj9evpS+LPGDXnmafpUhFmeJZhwZfYf7P8/pXE14Oc5wpp4bDv3er7+S8vz9N8KlS+iCiiivlzASilooAKu6Xpd1rGpR2dim6V+ST0Qd2PsKk0jRbzWrryrNPkU/PK3Cp9T6+1evaBolrodp5NoC0j4MkzD5pD/Qegr1styueMkpS0h37+SNIQ5jX0HSrbQ9IisrQfKnzPI3Bdj1Y/54FeUeO/E/8Ab2ri3tZN2nWZIjI6SN3f+g9vrWv418Yh4pdI0qTIPy3Nwh6+qKf5n8K85ruznMIOKwmH+Fb28uny/MqpP7KCkpaSvmzEKKKWgBKKKO1ABRRRQAUUUUAFIelLSNwjewoAZCcwofapar2zZhx6GrFKOwBRS0lMAooopgLmikopAL3pKWnDGeRTAZVq2067vCPs1tI4PfGB+Z4p0MqowKqAR7VpxX7MQWZjjpk10UaVOT99lJIv6f4NR3B1a/ihXvHAd7fn0H6122lQ6RouP7Ms1MvQzycufxPP5YrjIL444xWhFeOR978q+iwUsPQs6cFfu9X/AF6GsbLY73+2ZGTEku0ei8ZqA6gx4iGPc1yqXiRR75pFRR1ZjgVl33jOOFSmmp5sn/PVxhR9B1NerPNadKN6krfmW523OyvNTt7C3e4v5widixyWPoB3Neb+IfFdzrSmCIGCyB/1YPzSe7H+nSsW7vri/uPOvJmlkPdj09gOwq1pdrbzPvuJUyDxCTyfr7V89i82rY5+xp+7F/e/X/JfiZSm5aIzOvB60V2728cvEsSMP9pRUX9k2L9bcD/dYj+tccssn9mSJ5DjaDx1rtk0PTu8BP1c/wCNXbfTLKAgx2sOfUrk/rVQymq95IFBnDWmnXd82LS3kk9wMAfj0rqtL8GLuEmqy7sf8sYjx+Lf4VvNdQWybp5Y4kH99gKyLzxjbW4K2MbXEn95vlT/ABNdtPBYPC+9Xld/103K5Yx3Owi+zadZceVbWsQz2VVriPEfjWS8jez0gtFbEYkn6NIPQeg/U+1czqOrXmqSbryYuoOVjHCr9BVGscbnM6sfZUPdj+P/AABSqX0QUUUV4ZmFJS0lABRRRQAUUUUAFFGaKACiiigApkxxA59qfUNycQ49TSlogIrQ/My+vNXKzoW2zKe2cVoVNN6AhaKKKsAoopKAFopKKAFpRSUUAPDYqVJcdTVeiqUmh3NFL5Y/U/SnNrE2MRKqe55NZlFafWKi0THzMlmnluG3TSM59WNRUUVk227sQUUUUhE8V3cQ/wCqnkUegbirS61fIOJgfqoNZ1FaxrVI/DJod2an9v6hjAlQfRBUMmr38ow11IB6Kdv8qo0U3iKr3k/vC7FZmdtzks3qTk0lFFZCCiiikMKKKKBCUUUUAFFFFABRRRQAUUUUAJS0UUAFVLtvmVfQZq3WfM2+Zj26VFR6AyOtGNt8at7VnVatX+8h+oqIOzEWqKKK2Gdf4J+Gfi34iXE0fhDRpr1LcgTXBZY4Yz1wXYgZ9hk1a8b/AAl8afDq3juPFuiSWtnI21buKRZod3ZSyk4PscZr6S+AHizQdZ/Z/uvAVn4oTwt4rMk2263KkrF33LLGWI3HGFIB3DHbg1nfFLRvjH4M+DOpaRrmo6V4u8IyJtudRdHe8hQsCrNubopAIYbsd+BUczvYDyGL9mz4qT26TR+FyUkUMv8Ap0HIPI/jrD8WfBnx34G0BtY8U6H9i05ZFiM32qKT5m+6MKxNfQH7J/j7xX4r+ImtWPibxBf6lZ22leZFDcyblRvNRQQPXBI/GvBviZ8QPF/iHxT4h0LVNe1G+0yPVplhsJJNyApMwjAGO3AFCcr2Ap+D/hD438e6HNqvhTQ3vrCGVoWm8+OPLgAkAMwJwCOlcXb2k11qEVnDGTczSiFIzwS5baF56c8V+geja/p/wL8PfCfwJeiFbzW5TFesTgo7KSz/AIzyIuT2z6V8z/GXwZ/whn7UkSRReXp+rajbaja4GBiSUbwPpIH/AAIoU7gZR/Zq+K6qxPhRjjsL635/8frk9P8Ahf4x1LxxJ4Tg0G5j8RRRGZrG5KwtsGPmBYgEcjBB57V9y/GDwx8V9c8aaHP8MNeTStLhh23fmXGxTJ5mdxTadw29u/SvIf2p/iD/AGN8QPDP/CG6z9m8T6bZzxX95YOA8cchTbExGcHKs23tn3pKTYHk3/DNHxW/6Fb/AMnrf/4uvPvE/hDWvBniVtD8TWYsdTVUYxPMjAK/3SWUkY/Hivr698c+J0/YRtPE8euXw8Quy7tR8z96c3hQ8/7vH0r4217xBq3ijVn1LxHqFxqN/Iio1xctuYqBgDPtVRbYG94y+GPi34f21jceLtIaxgvyy28gmjlVyACRlGIHBzz17dKUfDDxafh2fGr6T5fhkJvF7LPGm4b9gIQtuOW4GBz2r6Y+Fk1n+0F+zxc+APEl4Ytc8PvF5F2RucRKf3Ug9SF3Rn2we9UvjJrmmeKfi94D+DWjMIfDOmXttBqEcLYDNwFiyP7kf/jz+opcz2A8D8HfBbx94808X3hvw/NLp7fcu7mRII5P9wuRu+oyKx/GPw98U+ALyO38X6NcaeZiRFK2Hilx12upKk+2c19K/tNfFnxN4M8Y6Z4P8FXz6Hptnp8cztZKEZ9xZVQHHyoqoOBjr7Ctr4e+ILv44/sveMdO8dlb2+0kSLDfsgViyxeZFIcDAdTkEjqOvU5XM9wPlS++HHinTfAFp4wvtLMXhy8KCC8M8Z37iQvyhtwzg9RS6B8N/FPijwlqniLQtLN1o+lb/tlwJ418rYgdvlZgThSDwDX0V4+/5R++Dif79pj/AL6enfs+Y/4ZQ+KZGM4vM5/681p8ztcDw7w78C/iH4s8OeteH/D5u9LvVLQTi7hTcASp4ZwRyD1FYfjD4beL/ABhPi7QbrT4p22xTttkidsZ2h0JXPtnNfYfgrSvFusfsT+GrP4d3hsvELxhoZhP5WFFy5cbsHquazvibc6n4X/AGQbzRPi3q9nqPi6+IS1VXDyM3nBkOcAsUUElse2T3XO7gfEsEEtzcRwW0byzSsFSNFyzE9gK6qX4aeK4rP7QdLLjGTHHMjOP+Ag5/CmfDzVrHRfHFrdao4itzG8fmsMiNmGAx9u2e2a9avNO8TSazd6x4Q8QWt7aTDC2Ny26JeOApU4+h4969rBYKlXpOcrt32ja6Xez3+RrCCaueIaP4a1bxA1yukWhna2x5wLqmzOcZ3Eehq/p3gPxFq2mRX+n6f5tpNnZJ5yDOCQeCc9Qa9H+GUl3J4o8XNqdutves6G4hVdoV8vnjnvXIfD3xDqy+M9H0z+0Lj+zDMyG13fJjDHGPrzRDB0FGk6jfvtrS3R2W/4gorS/Uyr34feJdP06e9vNO8u1t0MkknnIdqgZJwDmpIvhv4pnto54tM3RSqHRvPj5BGR/FW38U/EWrReLtS0y21G5j01rdFa2VvkIZBu4969H1TT9Wv/AAnoSaFrS6QyRRmSVjjeDGAB/Wt6eX4epUqQipPk81du9uw1CLbXY8C1nQtR8P3iWur2/kTvGJFXerZUkjOQT6Guj0n4V+Mtc8C3HizSNFkutAtlkaS5jmTIEf3zszuOMHoO1ZvjWDUbPxRLaaxqn9qXEEaAXAbIKkbgB9Mmvsz9nrxLp/hD9lCPW9cLLplrfzC4ZV3bVecJuI7gbsn2BrxcQlTqOMVs+u/4GUtHY+M/BvgfxB8QNYm03whYfb72GA3DxiVI8Rghc5YgdWH51Qi8PatceKG8P2mn3FxrS3D232K3TzHMikhlG3OcEHnpxmvuT4c/CsfDv9p7V77RIgfCmu6NLcWDxcpExliLQ59Bncv+yR6GsH4M2dl4Z074z/EL7JHdatYarqEUO4ZKxxbpSo9AzMM+yj0rDnFc8Auv2bvinaaR9vk8LO6BdxghuopJgP8AcDZJ9hk1xnhLwB4l8c69d6P4Z01rrVLOMyT20kqQtGoYKchyOQxAI616D4X/AGj/AIi2/wAQrDU9T16e/tLi6RbnTXRfJaNmAKooHykA8Ec8DOea+gfiCtj4C/bH8Aa/YrHbjxRDJY6iF+USMSI1c++Wj5/2BT5mtwPjjTfA/iHV/Hj+ENP055fEUc0sDWe9QVeMEuCxO3jaec4o1jwP4h0DxvF4V1bTXg1+WSKKO03qxZpMbAGBK85Hf619p6N4Pg8LftW/EjxndxEabYaKuoK2MYaVf3hB9f3Ev/fVM8R+FIPGf7S/wm8Z2UWdNv8AS2vXbGeYV8yLPvmZB/wGlzhc+MvGfgLxF8PtUt9P8XaeLC8uYfPii89JCybiu75Cccgjn0rmK9Y/aK8Tf8JR8ffEcsb77bTpF0+HnIAiGGx/wMvXk9WtgGyNsjZvQVnVaun4CD6mqtZTd2JhTkYo4YdRTaKgDTBDAEdDS1WtZOCh7cirVdCd1cZ9C/Cy5+Dfif4Xz+F/iLBaaF4jQssWu7NryqW3IwkwQGH3SGwCAPXjuvEPxC+H/wAMP2fNX8C+D/FU/izUNTimhjZn81YBKu1iWA2qijJCgkk/UkfIFJS5NbhY98/ZX8Y6B4J+Iut3nivVrbTLSfS/JiluGIDv5qHA98Amuc8DzeGb79ph9X8S6vZ2nhy31e51H7TOfkm2ys8SjjncxU/QGvJqKOUD688d/tbfZPHF/a+F/D2iazpNo6pa6hcs5aX5QWYccDdkD6Zqp8X/AIg+CviV4R+H3iaDWLC28T6Ze28l5pu474o3ZTMvTkIyg/TJr5O70UuRBY+xfiZ+0Bpej/Hnwfr3hDXE1XQIbN7bVoLSRijI0nPy9N4GGH+7jvXkH7Q8Hgy+8f8A/CSfD3XNOv7XWcyXtpasd0E4+8+CBw/X/eDeorxmimo2A+lrzx34Zb9he08Jprdo3iRWUtpwY+aP9ML9Mf3efpXzVSUU0rAe5/sv+LdC8GfFa/1HxTqtvpljJpUkKy3DEKzmSMheO+AT+Fee+KfERh+NWt+I/D1yknl67LfWNynKviYujD1B4/CuOootrcD7J1nxT8GP2gNH0vUPG+rv4W8TWUXlybphEwGclA7KUkTOSP4hntkisLxz8VvAXw7+EF38PvgvO19NqKul5qYJYKHGJGLkDfIy/KNowB6YAr5ToFLkA+q/hp8Rfh94y+A0Xwz+KeoNpL2J2214WKK6hy8bq+CFdclSGGCB3ycW/Ffj/wCGvwt+BeseBfhfqra3qWtLIk9yH8wL5ihHkdwAudgwqr7e5r5Joo5NQsfUM/xN0XTv2LNE0LRfEsVv4vsnidbW3kKzxkXRft/s8/SovjB4y8GfGD4MaF4jfV7Cw8f6XFifTpGKvMucSRjjnkeYnPQkdSa+Y6KORBY3fCd7pVj4ihfxDZpd6bIpSRXXd5eejgd8Y/ImvUtKHgPw74jn1vTPEaxQSI3+gwvlBkdAoG4+wPSvEKK78NjXh18CbTum90/kXGduh7J4Q8Z6QfFvirU7+7isYtQaP7OtwcFgoYc474wT9a888GXttYePNLu76ZYbWKctJI5wFG1uT+dc9RRPHVJ8l18Lb9W3cHNu3kdV8SL+01XxzfXOmXEdzbPFGEljOVYhAD+tej6tc+C/E/hvRrLVfEUUH2KJGKxOAd3lhSDlTXh9FVDHyjOpJxT590/W4Ker03N7xXp+iabqkMXhrUWv7VoQ0kjMDtfJ44A7YP417loPjrw1a/sQ654VudZtU8RXEkpi05mPmMDcIwwMegJr5uNFcVVqpJySt5Il6s+xv2cf2gdI03wY/hj4hatFY/2SANOvLknEkP8AzyJ9U7f7JH92uH+Fnxu0fwP8S/G+n+IE+2eDPEupXEpniTzBGWdwH29WR0IBHXgHHUV840VnyIVj7A0vwz+zh4U8SR+LYPF4vIbSQXFrpTXJmWNwcriMJ5jYOMBj2Gc14h8Zvi1c/Ev4mx69p0ctnY6Yqx6XE/31Ctv8xsdGZucdgAO2a8uooUbAfb3xd+OvhDWfgFqkfh3WLOXxJrtnBbzWsJPmxh8GRW46KpkH40z4O/HPwhoXwA0yHxHq9jD4i0K1uIILWXPmyKuTGF4/iXYv4V8SUUuRWsFiS5upr68nu7pi9xcyNLKx7sxJJ/M1ESACT0FLVa6kwoQdTyapuyArO5dyx702iiucQUUUUAKrFWBHUVoxuJEDCs2pYJfLfn7p61cJWYGhRR2orYZbt4LJ1BubySE9wlvvx/48K1LfTvDjj/SNfuoz6DTj/wDFGsCitYVIx3gn63/Rod/I7ODQ/Bjsvm+KbkA9f9DK4/Q1x1wFSeVYG3xq5CMf4hng/lTKKqrVjUSUYKPpf9Wxt36HqXj3wPpWg2PiiTR7a58zTfEiafBmRpNkBt3kIPqdwHJrG+HVroV/d61b6/on9pm30u5v4X+2SQbDDEz7fkPIYgZzyO1YVp4w8SWJvTZa/qsBv23XZju3XzzjGXwfmOOOayba6ns2drSaWFpI2icxMV3IwwynHUEcEd65rO1iT1Hw74I0jWrvwBO2nXC2euvqLX6xzOVjWFnKKH/h2oFyepHJ61b8P+B9Bup/CGhXej393N4n037ZJ4iiuWVLItvztjA2FItn7zdz97leK8ws/EGsafpF3plhq2oW2m3n/HxaQ3LpFL2+ZQcHjj3p1t4k1uz0KfR7TWNQh0m4JM1jFcusMmeuUBwc9/WjlfcDofh1pWh6jqOqN4liMsFrahoHkM6WglMiqDPJCrPGhBYKcY3Fc8V0OqeD9H8NGGTVtCmeceKrrSZrCXUGIWERQtGvmxgbipkJ3ADdxkdq840nWtT0C/8Atmh6jd6fd7SnnWkzRNtPUZUjj2qKXU7+4jCT3tzIgna5w8zN++bG6Tk/fOBlupwKbTA9X1jw54X0zU/Hl9B4ZnurTwxqaaVDpcd/MQwaSYG6mcfPjEaqFXA3MPoeL8f+GofDviYR6bb3cFlPZ212ba5JaSyaaISfZ5GwMsuTjIBIxkZzWLY+Ita0zWJtU03V9QtdSnLGW7guXSWTcctuYHJyeTnvUE2rajcwXMVzf3c0V1OLidJZmYTSgECR8n5mAZuTzyaSTQGz4h0ez07wp4NvbRHE+q2M890zOSGdLqSMYHYbUA4+td/aeHPCWt658NdPtvDj2K+KIzPdOmozSNxNPF5aBjxkxoc9ckivIZbqeeC3hnnlkitlKQo7ErEpYsQo7AsSeO5NOa+u2+ybrqc/Yxi2/eH9wNxbCf3fmJPHck02rgeleFfAOn6noXhq61WyvzdXQ1e4mtInKS3y2kUbxwxgg7SzF1LAE8HHIq3YeDfD/iC20DV00m50iHUodVR9M+0u6u1raGWOeNn+fZvIVgSRlDg8kDze/wDE2uarq0GpanrOo3eo2+PJu57p2liwcjaxOVweeKL3xLrmp6t/aWo6zqN1qHlGEXU1y7SBCCpQMTkKQxBHQ5PrSswN3wXo+nXHhjxJr+radNq50dLYR6bFM0QbzXZTNIyfN5abQPlx8zrk+t3VfDNgfDXijUrXRNV0u4s7nTvs1leSM7wxzxys4PALKdilSwztxnrmuN0rV9R0LUFvdEv7rT7xAVWe0maNwD1GQentV2z8X+I9Pvby7sNf1W2ur5g11PDeOrzkZwXYHLHk9fWnZgem6F4G8N/YkvNTtYmjXwnbao3227nji+0SXfkszGFWcDbwAARmpvBfw18PeMbLw6Yw8Oq6h4guEa1jnby7qwikhEscTNhhIiSFwSMsqtnkAV5TYeKdf0u4SfTdb1K1nSAW6yQXTowiDbhGCD93POOmagOu6sbyC5/tS9FzbztcxTC4YPHMxBaRTnIYkAk9TgVPK+4HaTWfh2P4RanqCeH92rWusDS0vTfS4w0ckgkKZ27hsAx0NYfxB0G38OfEHXtN0uGZNNsrswwmQlsYUHbuPU81zxvbk2L2huJTayS+c8O87GkwRvI6FsEjPXk1Ld6vqV/E8V9qF3cRvObh0mmZw0pUKZCCfvFQBnrgCqSYHqumeB9AuLvQ/D02j37zavoX9qN4lFywS3YwtLkR42GFCvlvu+bIbkHAp+t+BvDdj8FodcS2VNQGkWd19ohvZJJ2up5CAskGNqQlFkw+R8ygck4ry6PxHrUOgSaLDrGoJo8py9gty4hYk5OUzjrz0qNNb1ONCqajdhTAtsV85sGJWDLHjP3QwBA6AjNLlfcD0v4gfCv/AIRXwHol/a2s41O3kjtNY/fLKJJpohLGURSSgU74SCBlk968qgjRr6GK6YxRGQLKxHKDOGOPUDNWotc1WC9ubqDUr2O6upVnnmSdg8sivvV2Oclg/wAwJ5B5qlLI800ksztJLIxZ3c5LEnJJPck1UbrcDtbjQvA6E+R4pvCB3FqWz+grIuNP8MoT9m1+9f0zpx/+KFc9miuqeIhL/l1Ff+Bf/JFcy7Fu5hsowfst5LMewe22Z/8AHjVSil7VzNpvawhjuI0LHtWczFmLHqalnl8x8D7o6VDWE5XZIUUUVABRRRQAUUUUAWrab+Bj9DVusqrsE+/5XPzevrWsJdGMsUUlLWgCUUUUAFFFLQAlFFFABRRRQAUUUtABRRRQAlLRSUALSUUUALRSUUALSUtJQAUUUUAFFFFABRRRQAYqtczceWv4mnTz7BtQ/N/KqVZzl0QBRRRWQgooooAKKKKACiiigAooooAuwz78K/3vX1qesurUNzjCyfga1jPoxlqlpOvSitAFooooASiiigAooooAWikpaACiiigAooooASilpKACiiloAKSlpKACiiigAopKWgBKhmnCZVPvevpTJbj+GP8AFqq1nKfRAHU80UUVkIKKKKACiiigAooooAKKKKACiiigAooooAlinaM46r6VcjkWQfKfwrOpQSDkHBq4zaA1KSqsd12kH4irKsrjKkEVqpJjFooopgFFFFABS0lFAC0UUUAFJRRQAUUUUAFFFFABRRRQAUUjMEGWIAqtJddox+JpOSQFh3WMZY/Sqcs7ScDhfSoixY5Y5NJWUptiCiiioAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApQxU5UkH2pKKALKXTD74z71OsyP0bB9DxWfRVqbQGpRWcsjp91iKlF04+8AatVEO5coqut2p+8pH0p4uIz/ABY+oquZATUVGJYz0dfzp3mL/eX86d0A6kpN6f3l/Om+ag6uv50XQD6KiNxGP4s/QUw3ajopNLmQFiiqbXTn7oAqJpHf7zE1LqILl15kTqwz6CoHuieEGPc1WoqHNsQrMWOWJJ96SiioAKKKKACiiigAooooAKKKKACiiigD/9k=';
const CONTACT_TARGET = '#contatti';
const BNB_URL = 'https://bnb-claude.vercel.app/';

function scrollToSection(selector) {
  const target = document.querySelector(selector);
  const navbar = document.getElementById('navbar');
  if (!target) return;

  const offset = (navbar?.offsetHeight || 0) + 16;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

function brandMarkup() {
  return `
    <span class="brand-mark" aria-hidden="true">
      <img src="${BRAND_LOGO}" alt="" decoding="async" />
    </span>
    <span class="brand-name" aria-label="${BRAND_NAME}">
      <span class="brand-word">start</span><span class="brand-word brand-word--accent">your</span><span class="brand-word">site</span><span class="brand-word brand-word--accent">now</span>
    </span>
  `;
}

function applyRequestedLandingUpdates() {
  const style = document.createElement('style');
  style.textContent = `
    .brand-logo {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: flex-start !important;
      gap: 12px !important;
      width: auto !important;
      height: auto !important;
      max-width: 100% !important;
      overflow: visible !important;
      background: transparent !important;
      border: 0 !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      margin-right: auto;
      letter-spacing: 0 !important;
      font-size: 0 !important;
      line-height: 1 !important;
      flex: 0 1 auto;
      min-width: 0;
      text-decoration: none !important;
    }
    .brand-mark {
      width: 74px;
      height: 74px;
      border-radius: 50%;
      overflow: hidden;
      flex: 0 0 74px;
      border: 0 !important;
      box-shadow: 0 10px 30px rgba(0,0,0,0.28);
      background: #050508;
      display: grid;
      place-items: center;
    }
    .brand-mark img {
      width: 100% !important;
      height: 100% !important;
      max-width: none !important;
      object-fit: contain !important;
      object-position: center !important;
      display: block;
      border: 0 !important;
      border-radius: 50% !important;
      box-shadow: none !important;
      background: transparent !important;
      transform: none !important;
      filter: none !important;
      -webkit-filter: none !important;
      opacity: 1 !important;
      mix-blend-mode: normal !important;
    }
    .brand-name {
      display: inline-flex;
      align-items: baseline;
      flex: 0 1 auto;
      min-width: 0;
      white-space: nowrap;
      font-family: var(--font-display);
      font-size: 18px;
      font-weight: 800;
      line-height: 1;
      letter-spacing: 0;
      text-transform: lowercase;
    }
    .brand-logo .brand-word {
      color: var(--white) !important;
    }
    .brand-logo .brand-word--accent {
      color: #8b5cf6 !important;
    }
    .navbar.scrolled .brand-mark {
      width: 64px;
      height: 64px;
      flex-basis: 64px;
    }
    .soluzione-text > .btn-primary {
      display: none !important;
    }
    .soluzione-text .check-list {
      margin-bottom: 0 !important;
    }
    .pricing-card {
      display: flex;
      flex-direction: column;
      min-height: 100%;
    }
    .pricing-card > .pricing-cta {
      width: 100% !important;
      height: 52px !important;
      min-height: 52px !important;
      margin-top: auto !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 0 !important;
      background: var(--electric) !important;
      color: var(--white) !important;
      border: 1px solid rgba(255,255,255,0.14) !important;
      border-radius: 10px !important;
      padding: 14px 20px !important;
      font-family: var(--font-display) !important;
      font-size: 15px !important;
      font-weight: 800 !important;
      letter-spacing: 0 !important;
      line-height: 1 !important;
      transition: var(--transition) !important;
      text-align: center !important;
      white-space: nowrap !important;
    }
    .pricing-card > .pricing-cta:hover {
      color: var(--white) !important;
      background: var(--electric-bright) !important;
      transform: translateY(-2px) !important;
      box-shadow: 0 12px 34px rgba(139,92,246,0.36) !important;
    }
    .cta-form-box .btn-wa-form {
      width: 100%;
      min-height: 58px;
      margin-top: 14px;
      padding: 18px 20px;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.18);
      background: linear-gradient(135deg, #25D366 0%, var(--electric) 68%, var(--electric-bright) 100%);
      color: white;
      font-family: var(--font-display);
      font-size: 16px;
      font-weight: 800;
      letter-spacing: 0;
      gap: 12px;
      box-shadow: 0 14px 38px rgba(37,211,102,0.16), 0 16px 46px rgba(139,92,246,0.18);
    }
    .cta-form-box .btn-wa-form:hover {
      background: linear-gradient(135deg, #2ee879 0%, var(--electric-bright) 72%, #c4b5fd 100%);
      transform: translateY(-3px);
      box-shadow: 0 18px 46px rgba(37,211,102,0.22), 0 22px 58px rgba(139,92,246,0.30);
    }
    .cta-form-box .btn-wa-form span {
      font-size: 19px;
      line-height: 1;
    }
    .faq {
      padding-bottom: 132px;
    }
    .cta-finale {
      padding-top: 132px;
    }
    .cta-finale::before,
    .cta-finale::after {
      content: none !important;
      display: none !important;
    }
    .footer .nav-logo.brand-logo {
      margin-right: 0 !important;
      justify-content: flex-start !important;
    }
    .footer .brand-mark {
      width: 64px;
      height: 64px;
      flex-basis: 64px;
    }
    .footer .brand-name {
      font-size: 18px;
    }
    @media (max-width: 900px) {
      .brand-mark,
      .navbar.scrolled .brand-mark {
        width: 62px;
        height: 62px;
        flex-basis: 62px;
      }
      .brand-name {
        font-size: 16px;
      }
    }
    @media (max-width: 640px) {
      .nav-inner { gap: 10px; }
      .brand-logo { gap: 8px !important; }
      .brand-mark,
      .navbar.scrolled .brand-mark {
        width: 48px;
        height: 48px;
        flex-basis: 48px;
      }
      .brand-name {
        font-size: 12px;
      }
      .faq { padding-bottom: 88px; }
      .cta-finale { padding-top: 88px; }
      .footer .brand-logo { gap: 10px !important; }
      .footer .brand-mark {
        width: 56px;
        height: 56px;
        flex-basis: 56px;
      }
      .footer .brand-name { font-size: 16px; }
    }
  `;
  document.head.appendChild(style);

  const navLogo = document.querySelector('.navbar .nav-logo');
  if (navLogo) {
    navLogo.classList.add('brand-logo');
    navLogo.setAttribute('aria-label', `${BRAND_NAME} - Homepage`);
    navLogo.innerHTML = brandMarkup();
  }

  const navDemoButton = document.querySelector('.navbar .btn-nav');
  if (navDemoButton) {
    navDemoButton.setAttribute('href', CONTACT_TARGET);
    navDemoButton.removeAttribute('target');
    navDemoButton.removeAttribute('rel');
    navDemoButton.setAttribute('aria-label', "Vai all'ultima sezione per richiedere una demo gratuita");
  }

  document.querySelectorAll('a[href*="bnb-ebon.vercel.app"], a[aria-label*="B&B"]').forEach((link) => {
    if (link.textContent.includes('Vedi esempio') || link.href.includes('bnb-ebon.vercel.app')) {
      link.href = BNB_URL;
    }
  });

  document.querySelector('.soluzione-text > .btn-primary')?.remove();

  document.querySelectorAll('.pricing-card > a').forEach((button) => {
    button.classList.add('pricing-cta');
    button.setAttribute('href', CONTACT_TARGET);
    button.setAttribute('aria-label', 'Richiedi la demo gratuita');
    button.textContent = 'Richiedi la demo gratuita';
  });

  const whatsappButton = document.getElementById('btnWaForm');
  if (whatsappButton) {
    whatsappButton.innerHTML = '<span aria-hidden="true">WhatsApp</span><span>Prepara messaggio WhatsApp</span>';
    whatsappButton.setAttribute('aria-label', 'Prepara un messaggio WhatsApp con i dati inseriti');
  }

  const faqSection = document.getElementById('faq');
  const ctaSection = document.getElementById('contatti');
  if (faqSection && ctaSection && faqSection.contains(ctaSection)) {
    faqSection.after(ctaSection);
  }

  const footer = document.querySelector('.footer');
  const footerLogo = footer?.querySelector('.nav-logo');
  if (footerLogo) {
    footerLogo.classList.add('brand-logo');
    footerLogo.setAttribute('aria-label', `${BRAND_NAME} - torna in cima`);
    footerLogo.innerHTML = brandMarkup();
  }
  if (footer) {
    document.body.appendChild(footer);
  }

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodesToClean = [];
  while (walker.nextNode()) {
    if (walker.currentNode.nodeValue.includes('-->')) {
      nodesToClean.push(walker.currentNode);
    }
  }
  nodesToClean.forEach((node) => {
    node.nodeValue = node.nodeValue.replace(/-->/g, '').trim();
  });
}

applyRequestedLandingUpdates();

// ============================================
// NAVBAR STICKY SCROLL
// ============================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ============================================
// REVEAL ON SCROLL
// ============================================
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el = entry.target;
    const delay = parseInt(el.dataset.delay || 0, 10);

    setTimeout(() => {
      el.classList.add('visible');
    }, delay);

    revealObserver.unobserve(el);
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -32px 0px'
});

document.querySelectorAll(
  '.problem-grid, .servizi-grid, .esempi-grid, .recensioni-grid, .pricing-grid, .attivita-grid'
).forEach(grid => {
  grid.querySelectorAll('.reveal').forEach((el, i) => {
    el.dataset.delay = Math.min(i * 80, 400);
  });
});

revealElements.forEach(el => revealObserver.observe(el));

// ============================================
// FAQ ACCORDION
// ============================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  if (!question) return;

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    faqItems.forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('open');
      question.setAttribute('aria-expanded', 'true');
    }
  });
});

// ============================================
// STICKY CTA MOBILE
// ============================================
const stickyCta = document.getElementById('stickyCta');

window.addEventListener('scroll', () => {
  stickyCta?.classList.toggle('visible', window.scrollY > 300);
}, { passive: true });

// ============================================
// SMOOTH SCROLL - link interni
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    scrollToSection(href);
  });
});

// ============================================
// COUNTER ANIMATO - statistiche hero
// ============================================
function animateCounter(el, target, suffix, duration = 1200) {
  const startTime = performance.now();

  const update = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);

    if (suffix === 'h') el.textContent = current + 'h';
    if (suffix === '%') el.textContent = current + '%';
    if (suffix === '+') el.textContent = '+' + current;

    if (progress < 1) requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
}

const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
  let triggered = false;
  const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !triggered) {
      triggered = true;
      const nums = document.querySelectorAll('.stat-num');
      if (nums[0]) animateCounter(nums[0], 48, 'h');
      if (nums[1]) animateCounter(nums[1], 100, '%');
      statsObserver.disconnect();
    }
  }, { threshold: 0.5 });
  statsObserver.observe(statsSection);
}

// ============================================
// PARALLAX LEGGERO - hero glow
// ============================================
const heroGlow = document.querySelector('.hero-glow');
if (heroGlow) {
  window.addEventListener('scroll', () => {
    heroGlow.style.transform = `translateY(${window.scrollY * 0.15}px)`;
  }, { passive: true });
}

// ============================================
// FORM -> WHATSAPP
// ============================================
const btnWaForm = document.getElementById('btnWaForm');
if (btnWaForm) {
  btnWaForm.addEventListener('click', () => {
    const attivita = document.getElementById('f-attivita')?.value.trim();
    const messaggio = document.getElementById('f-messaggio')?.value.trim();

    let testo = 'Ciao! Vorrei una demo gratuita per il sito della mia attivita.';
    if (attivita) testo += `\n\nAttivita: ${attivita}`;
    if (messaggio) testo += `\n\n${messaggio}`;

    window.open(
      `https://wa.me/39XXXXXXXXXX?text=${encodeURIComponent(testo)}`,
      '_blank',
      'noopener,noreferrer'
    );

    trackEvent('Lead', { content_name: 'Form WhatsApp' });
  });
}

// ============================================
// META PIXEL - traccia click su CTA WhatsApp
// ============================================
document.querySelectorAll('a[href*="wa.me"]').forEach(btn => {
  btn.addEventListener('click', () => {
    trackEvent('Lead', { content_name: 'WhatsApp CTA' });
  });
});

const ctaFinale = document.querySelector('.cta-finale');
if (ctaFinale) {
  const pixelObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      trackEvent('ViewContent', { content_name: 'CTA Finale' });
      pixelObserver.disconnect();
    }
  }, { threshold: 0.4 });
  pixelObserver.observe(ctaFinale);
}
