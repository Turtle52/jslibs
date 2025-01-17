!function(t){if("object"==typeof exports)module.exports=t();else if("function"==typeof define&&define.amd)define(t);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.PF=t()}}(function(){return function t(e,i,n){function r(s,a){if(!i[s]){if(!e[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var h=i[s]={exports:{}};e[s][0].call(h.exports,function(t){return r(e[s][1][t]||t)},h,h.exports,t,e,i,n)}return i[s].exports}for(var o="function"==typeof require&&require,s=0;s<n.length;s++)r(n[s]);return r}({1:[function(t,e,i){e.exports=t("./lib/heap")},{"./lib/heap":2}],2:[function(t,e,i){(function(){var t,i,n,r,o,s,a,l,h,u,p,c,f,d,g;n=Math.floor,u=Math.min,i=function(t,e){return e>t?-1:t>e?1:0},h=function(t,e,r,o,s){var a;if(null==r&&(r=0),null==s&&(s=i),0>r)throw new Error("lo must be non-negative");for(null==o&&(o=t.length);o>r;)s(e,t[a=n((r+o)/2)])<0?o=a:r=a+1;return[].splice.apply(t,[r,r-r].concat(e)),e},s=function(t,e,n){return null==n&&(n=i),t.push(e),d(t,0,t.length-1,n)},o=function(t,e){var n,r;return null==e&&(e=i),n=t.pop(),t.length?(r=t[0],t[0]=n,g(t,0,e)):r=n,r},l=function(t,e,n){var r;return null==n&&(n=i),r=t[0],t[0]=e,g(t,0,n),r},a=function(t,e,n){var r;return null==n&&(n=i),t.length&&n(t[0],e)<0&&(e=(r=[t[0],e])[0],t[0]=r[1],g(t,0,n)),e},r=function(t,e){var r,o,s,a,l,h;for(null==e&&(e=i),l=[],o=0,s=(a=function(){h=[];for(var e=0,i=n(t.length/2);i>=0?i>e:e>i;i>=0?e++:e--)h.push(e);return h}.apply(this).reverse()).length;s>o;o++)r=a[o],l.push(g(t,r,e));return l},f=function(t,e,n){var r;return null==n&&(n=i),-1!==(r=t.indexOf(e))?(d(t,0,r,n),g(t,r,n)):void 0},p=function(t,e,n){var o,s,l,h,u;if(null==n&&(n=i),!(s=t.slice(0,e)).length)return s;for(r(s,n),l=0,h=(u=t.slice(e)).length;h>l;l++)o=u[l],a(s,o,n);return s.sort(n).reverse()},c=function(t,e,n){var s,a,l,p,c,f,d,g,b;if(null==n&&(n=i),10*e<=t.length){if(!(l=t.slice(0,e).sort(n)).length)return l;for(a=l[l.length-1],p=0,f=(d=t.slice(e)).length;f>p;p++)n(s=d[p],a)<0&&(h(l,s,0,null,n),l.pop(),a=l[l.length-1]);return l}for(r(t,n),b=[],c=0,g=u(e,t.length);g>=0?g>c:c>g;g>=0?++c:--c)b.push(o(t,n));return b},d=function(t,e,n,r){var o,s,a;for(null==r&&(r=i),o=t[n];n>e&&r(o,s=t[a=n-1>>1])<0;)t[n]=s,n=a;return t[n]=o},g=function(t,e,n){var r,o,s,a,l;for(null==n&&(n=i),o=t.length,l=e,s=t[e],r=2*e+1;o>r;)o>(a=r+1)&&!(n(t[r],t[a])<0)&&(r=a),t[e]=t[r],r=2*(e=r)+1;return t[e]=s,d(t,l,e,n)},t=function(){function t(t){this.cmp=null!=t?t:i,this.nodes=[]}return t.push=s,t.pop=o,t.replace=l,t.pushpop=a,t.heapify=r,t.updateItem=f,t.nlargest=p,t.nsmallest=c,t.prototype.push=function(t){return s(this.nodes,t,this.cmp)},t.prototype.pop=function(){return o(this.nodes,this.cmp)},t.prototype.peek=function(){return this.nodes[0]},t.prototype.contains=function(t){return-1!==this.nodes.indexOf(t)},t.prototype.replace=function(t){return l(this.nodes,t,this.cmp)},t.prototype.pushpop=function(t){return a(this.nodes,t,this.cmp)},t.prototype.heapify=function(){return r(this.nodes,this.cmp)},t.prototype.updateItem=function(t){return f(this.nodes,t,this.cmp)},t.prototype.clear=function(){return this.nodes=[]},t.prototype.empty=function(){return 0===this.nodes.length},t.prototype.size=function(){return this.nodes.length},t.prototype.clone=function(){var e;return(e=new t).nodes=this.nodes.slice(0),e},t.prototype.toArray=function(){return this.nodes.slice(0)},t.prototype.insert=t.prototype.push,t.prototype.top=t.prototype.peek,t.prototype.front=t.prototype.peek,t.prototype.has=t.prototype.contains,t.prototype.copy=t.prototype.clone,t}(),(null!=e?e.exports:void 0)?e.exports=t:window.Heap=t}).call(this)},{}],3:[function(t,e,i){e.exports={Always:1,Never:2,IfAtMostOneObstacle:3,OnlyWhenNoObstacles:4}},{}],4:[function(t,e,i){function n(t,e,i){var n;"object"!=typeof t?n=t:(e=t.length,n=t[0].length,i=t),this.width=n,this.height=e,this.nodes=this._buildNodes(n,e,i)}var r=t("./Node"),o=t("./DiagonalMovement");n.prototype._buildNodes=function(t,e,i){var n,o,s=new Array(e);for(n=0;e>n;++n)for(s[n]=new Array(t),o=0;t>o;++o)s[n][o]=new r(o,n);if(void 0===i)return s;if(i.length!==e||i[0].length!==t)throw new Error("Matrix size does not fit");for(n=0;e>n;++n)for(o=0;t>o;++o)i[n][o]&&(s[n][o].walkable=!1);return s},n.prototype.getNodeAt=function(t,e){return this.nodes[e][t]},n.prototype.isWalkableAt=function(t,e){return this.isInside(t,e)&&this.nodes[e][t].walkable},n.prototype.isInside=function(t,e){return t>=0&&t<this.width&&e>=0&&e<this.height},n.prototype.setWalkableAt=function(t,e,i){this.isInside(t,e)&&(this.nodes[e][t].walkable=i)},n.prototype.getNeighbors=function(t,e){var i=t.x,n=t.y,r=[],s=!1,a=!1,l=!1,h=!1,u=!1,p=!1,c=!1,f=!1,d=this.nodes;if(this.isWalkableAt(i,n-1)&&(r.push(d[n-1][i]),s=!0),this.isWalkableAt(i+1,n)&&(r.push(d[n][i+1]),l=!0),this.isWalkableAt(i,n+1)&&(r.push(d[n+1][i]),u=!0),this.isWalkableAt(i-1,n)&&(r.push(d[n][i-1]),c=!0),e===o.Never)return r;if(e===o.OnlyWhenNoObstacles)a=c&&s,h=s&&l,p=l&&u,f=u&&c;else if(e===o.IfAtMostOneObstacle)a=c||s,h=s||l,p=l||u,f=u||c;else{if(e!==o.Always)throw new Error("Incorrect value of diagonalMovement");a=!0,h=!0,p=!0,f=!0}return a&&this.isWalkableAt(i-1,n-1)&&r.push(d[n-1][i-1]),h&&this.isWalkableAt(i+1,n-1)&&r.push(d[n-1][i+1]),p&&this.isWalkableAt(i+1,n+1)&&r.push(d[n+1][i+1]),f&&this.isWalkableAt(i-1,n+1)&&r.push(d[n+1][i-1]),r},n.prototype.clone=function(){var t,e,i=this.width,o=this.height,s=this.nodes,a=new n(i,o),l=new Array(o);for(t=0;o>t;++t)for(l[t]=new Array(i),e=0;i>e;++e)l[t][e]=new r(e,t,s[t][e].walkable);return a.nodes=l,a},e.exports=n},{"./DiagonalMovement":3,"./Node":6}],5:[function(t,e,i){e.exports={manhattan:function(t,e){return t+e},euclidean:function(t,e){return Math.sqrt(t*t+e*e)},octile:function(t,e){var i=Math.SQRT2-1;return e>t?i*t+e:i*e+t},chebyshev:function(t,e){return Math.max(t,e)}}},{}],6:[function(t,e,i){e.exports=function(t,e,i){this.x=t,this.y=e,this.walkable=void 0===i||i}},{}],7:[function(t,e,i){function n(t){for(var e=[[t.x,t.y]];t.parent;)t=t.parent,e.push([t.x,t.y]);return e.reverse()}function r(t,e,i,n){var r,o,s,a,l,h,u=Math.abs,p=[];for(r=i>t?1:-1,o=n>e?1:-1,l=(s=u(i-t))-(a=u(n-e));p.push([t,e]),t!==i||e!==n;)(h=2*l)>-a&&(l-=a,t+=r),s>h&&(l+=s,e+=o);return p}i.backtrace=n,i.biBacktrace=function(t,e){var i=n(t),r=n(e);return i.concat(r.reverse())},i.pathLength=function(t){var e,i,n,r,o,s=0;for(e=1;e<t.length;++e)i=t[e-1],n=t[e],r=i[0]-n[0],o=i[1]-n[1],s+=Math.sqrt(r*r+o*o);return s},i.interpolate=r,i.expandPath=function(t){var e,i,n,o,s,a,l=[],h=t.length;if(2>h)return l;for(s=0;h-1>s;++s)for(e=t[s],i=t[s+1],o=(n=r(e[0],e[1],i[0],i[1])).length,a=0;o-1>a;++a)l.push(n[a]);return l.push(t[h-1]),l},i.smoothenPath=function(t,e){var i,n,o,s,a,l,h,u,p,c=e.length,f=e[0][0],d=e[0][1],g=e[c-1][0],b=e[c-1][1];for(o=[[i=f,n=d]],s=2;c>s;++s){for(h=r(i,n,(l=e[s])[0],l[1]),p=!1,a=1;a<h.length;++a)if(u=h[a],!t.isWalkableAt(u[0],u[1])){p=!0;break}p&&(lastValidCoord=e[s-1],o.push(lastValidCoord),i=lastValidCoord[0],n=lastValidCoord[1])}return o.push([g,b]),o},i.compressPath=function(t){if(t.length<3)return t;var e,i,n,r,o,s,a=[],l=t[0][0],h=t[0][1],u=t[1][0],p=t[1][1],c=u-l,f=p-h;for(c/=o=Math.sqrt(c*c+f*f),f/=o,a.push([l,h]),s=2;s<t.length;s++)e=u,i=p,n=c,r=f,c=(u=t[s][0])-e,f=(p=t[s][1])-i,f/=o=Math.sqrt(c*c+f*f),(c/=o)===n&&f===r||a.push([e,i]);return a.push([u,p]),a}},{}],8:[function(t,e,i){e.exports={Heap:t("heap"),Node:t("./core/Node"),Grid:t("./core/Grid"),Util:t("./core/Util"),DiagonalMovement:t("./core/DiagonalMovement"),Heuristic:t("./core/Heuristic"),AStarFinder:t("./finders/AStarFinder"),BestFirstFinder:t("./finders/BestFirstFinder"),BreadthFirstFinder:t("./finders/BreadthFirstFinder"),DijkstraFinder:t("./finders/DijkstraFinder"),BiAStarFinder:t("./finders/BiAStarFinder"),BiBestFirstFinder:t("./finders/BiBestFirstFinder"),BiBreadthFirstFinder:t("./finders/BiBreadthFirstFinder"),BiDijkstraFinder:t("./finders/BiDijkstraFinder"),IDAStarFinder:t("./finders/IDAStarFinder"),JumpPointFinder:t("./finders/JumpPointFinder")}},{"./core/DiagonalMovement":3,"./core/Grid":4,"./core/Heuristic":5,"./core/Node":6,"./core/Util":7,"./finders/AStarFinder":9,"./finders/BestFirstFinder":10,"./finders/BiAStarFinder":11,"./finders/BiBestFirstFinder":12,"./finders/BiBreadthFirstFinder":13,"./finders/BiDijkstraFinder":14,"./finders/BreadthFirstFinder":15,"./finders/DijkstraFinder":16,"./finders/IDAStarFinder":17,"./finders/JumpPointFinder":22,heap:1}],9:[function(t,e,i){function n(t){t=t||{},this.allowDiagonal=t.allowDiagonal,this.dontCrossCorners=t.dontCrossCorners,this.heuristic=t.heuristic||s.manhattan,this.weight=t.weight||1,this.diagonalMovement=t.diagonalMovement,this.diagonalMovement||(this.allowDiagonal?this.dontCrossCorners?this.diagonalMovement=a.OnlyWhenNoObstacles:this.diagonalMovement=a.IfAtMostOneObstacle:this.diagonalMovement=a.Never),this.diagonalMovement===a.Never?this.heuristic=t.heuristic||s.manhattan:this.heuristic=t.heuristic||s.octile}var r=t("heap"),o=t("../core/Util"),s=t("../core/Heuristic"),a=t("../core/DiagonalMovement");n.prototype.findPath=function(t,e,i,n,s){var a,l,h,u,p,c,f,d,g=new r(function(t,e){return t.f-e.f}),b=s.getNodeAt(t,e),v=s.getNodeAt(i,n),A=this.heuristic,m=this.diagonalMovement,y=this.weight,k=Math.abs,M=Math.SQRT2;for(b.g=0,b.f=0,g.push(b),b.opened=!0;!g.empty();){if((a=g.pop()).closed=!0,a===v)return o.backtrace(v);for(u=0,p=(l=s.getNeighbors(a,m)).length;p>u;++u)(h=l[u]).closed||(c=h.x,f=h.y,d=a.g+(c-a.x==0||f-a.y==0?1:M),(!h.opened||d<h.g)&&(h.g=d,h.h=h.h||y*A(k(c-i),k(f-n)),h.f=h.g+h.h,h.parent=a,h.opened?g.updateItem(h):(g.push(h),h.opened=!0)))}return[]},e.exports=n},{"../core/DiagonalMovement":3,"../core/Heuristic":5,"../core/Util":7,heap:1}],10:[function(t,e,i){function n(t){r.call(this,t);var e=this.heuristic;this.heuristic=function(t,i){return 1e6*e(t,i)}}var r=t("./AStarFinder");(n.prototype=new r).constructor=n,e.exports=n},{"./AStarFinder":9}],11:[function(t,e,i){function n(t){t=t||{},this.allowDiagonal=t.allowDiagonal,this.dontCrossCorners=t.dontCrossCorners,this.diagonalMovement=t.diagonalMovement,this.heuristic=t.heuristic||s.manhattan,this.weight=t.weight||1,this.diagonalMovement||(this.allowDiagonal?this.dontCrossCorners?this.diagonalMovement=a.OnlyWhenNoObstacles:this.diagonalMovement=a.IfAtMostOneObstacle:this.diagonalMovement=a.Never),this.diagonalMovement===a.Never?this.heuristic=t.heuristic||s.manhattan:this.heuristic=t.heuristic||s.octile}var r=t("heap"),o=t("../core/Util"),s=t("../core/Heuristic"),a=t("../core/DiagonalMovement");n.prototype.findPath=function(t,e,i,n,s){var a,l,h,u,p,c,f,d,g=function(t,e){return t.f-e.f},b=new r(g),v=new r(g),A=s.getNodeAt(t,e),m=s.getNodeAt(i,n),y=this.heuristic,k=this.diagonalMovement,M=this.weight,W=Math.abs,w=Math.SQRT2;for(A.g=0,A.f=0,b.push(A),A.opened=1,m.g=0,m.f=0,v.push(m),m.opened=2;!b.empty()&&!v.empty();){for((a=b.pop()).closed=!0,u=0,p=(l=s.getNeighbors(a,k)).length;p>u;++u)if(!(h=l[u]).closed){if(2===h.opened)return o.biBacktrace(a,h);c=h.x,f=h.y,d=a.g+(c-a.x==0||f-a.y==0?1:w),(!h.opened||d<h.g)&&(h.g=d,h.h=h.h||M*y(W(c-i),W(f-n)),h.f=h.g+h.h,h.parent=a,h.opened?b.updateItem(h):(b.push(h),h.opened=1))}for((a=v.pop()).closed=!0,u=0,p=(l=s.getNeighbors(a,k)).length;p>u;++u)if(!(h=l[u]).closed){if(1===h.opened)return o.biBacktrace(h,a);c=h.x,f=h.y,d=a.g+(c-a.x==0||f-a.y==0?1:w),(!h.opened||d<h.g)&&(h.g=d,h.h=h.h||M*y(W(c-t),W(f-e)),h.f=h.g+h.h,h.parent=a,h.opened?v.updateItem(h):(v.push(h),h.opened=2))}}return[]},e.exports=n},{"../core/DiagonalMovement":3,"../core/Heuristic":5,"../core/Util":7,heap:1}],12:[function(t,e,i){function n(t){r.call(this,t);var e=this.heuristic;this.heuristic=function(t,i){return 1e6*e(t,i)}}var r=t("./BiAStarFinder");(n.prototype=new r).constructor=n,e.exports=n},{"./BiAStarFinder":11}],13:[function(t,e,i){function n(t){t=t||{},this.allowDiagonal=t.allowDiagonal,this.dontCrossCorners=t.dontCrossCorners,this.diagonalMovement=t.diagonalMovement,this.diagonalMovement||(this.allowDiagonal?this.dontCrossCorners?this.diagonalMovement=o.OnlyWhenNoObstacles:this.diagonalMovement=o.IfAtMostOneObstacle:this.diagonalMovement=o.Never)}var r=t("../core/Util"),o=t("../core/DiagonalMovement");n.prototype.findPath=function(t,e,i,n,o){var s,a,l,h,u,p=o.getNodeAt(t,e),c=o.getNodeAt(i,n),f=[],d=[],g=this.diagonalMovement;for(f.push(p),p.opened=!0,p.by=0,d.push(c),c.opened=!0,c.by=1;f.length&&d.length;){for((l=f.shift()).closed=!0,h=0,u=(s=o.getNeighbors(l,g)).length;u>h;++h)if(!(a=s[h]).closed)if(a.opened){if(1===a.by)return r.biBacktrace(l,a)}else f.push(a),a.parent=l,a.opened=!0,a.by=0;for((l=d.shift()).closed=!0,h=0,u=(s=o.getNeighbors(l,g)).length;u>h;++h)if(!(a=s[h]).closed)if(a.opened){if(0===a.by)return r.biBacktrace(a,l)}else d.push(a),a.parent=l,a.opened=!0,a.by=1}return[]},e.exports=n},{"../core/DiagonalMovement":3,"../core/Util":7}],14:[function(t,e,i){function n(t){r.call(this,t),this.heuristic=function(t,e){return 0}}var r=t("./BiAStarFinder");(n.prototype=new r).constructor=n,e.exports=n},{"./BiAStarFinder":11}],15:[function(t,e,i){function n(t){t=t||{},this.allowDiagonal=t.allowDiagonal,this.dontCrossCorners=t.dontCrossCorners,this.diagonalMovement=t.diagonalMovement,this.diagonalMovement||(this.allowDiagonal?this.dontCrossCorners?this.diagonalMovement=o.OnlyWhenNoObstacles:this.diagonalMovement=o.IfAtMostOneObstacle:this.diagonalMovement=o.Never)}var r=t("../core/Util"),o=t("../core/DiagonalMovement");n.prototype.findPath=function(t,e,i,n,o){var s,a,l,h,u,p=[],c=this.diagonalMovement,f=o.getNodeAt(t,e),d=o.getNodeAt(i,n);for(p.push(f),f.opened=!0;p.length;){if((l=p.shift()).closed=!0,l===d)return r.backtrace(d);for(h=0,u=(s=o.getNeighbors(l,c)).length;u>h;++h)(a=s[h]).closed||a.opened||(p.push(a),a.opened=!0,a.parent=l)}return[]},e.exports=n},{"../core/DiagonalMovement":3,"../core/Util":7}],16:[function(t,e,i){function n(t){r.call(this,t),this.heuristic=function(t,e){return 0}}var r=t("./AStarFinder");(n.prototype=new r).constructor=n,e.exports=n},{"./AStarFinder":9}],17:[function(t,e,i){function n(t){t=t||{},this.allowDiagonal=t.allowDiagonal,this.dontCrossCorners=t.dontCrossCorners,this.diagonalMovement=t.diagonalMovement,this.heuristic=t.heuristic||r.manhattan,this.weight=t.weight||1,this.trackRecursion=t.trackRecursion||!1,this.timeLimit=t.timeLimit||1/0,this.diagonalMovement||(this.allowDiagonal?this.dontCrossCorners?this.diagonalMovement=s.OnlyWhenNoObstacles:this.diagonalMovement=s.IfAtMostOneObstacle:this.diagonalMovement=s.Never),this.diagonalMovement===s.Never?this.heuristic=t.heuristic||r.manhattan:this.heuristic=t.heuristic||r.octile}var r=(t("../core/Util"),t("../core/Heuristic")),o=t("../core/Node"),s=t("../core/DiagonalMovement");n.prototype.findPath=function(t,e,i,n,r){var s,a,l,h=(new Date).getTime(),u=function(t,e){return this.heuristic(Math.abs(e.x-t.x),Math.abs(e.y-t.y))}.bind(this),p=function(t,e){return t.x===e.x||t.y===e.y?1:Math.SQRT2},c=function(t,e,i,n,s){if(this.timeLimit>0&&(new Date).getTime()-h>1e3*this.timeLimit)return 1/0;var a=e+u(t,d)*this.weight;if(a>i)return a;if(t==d)return n[s]=[t.x,t.y],t;var l,f,g,b,v=r.getNeighbors(t,this.diagonalMovement);for(g=0,l=1/0;b=v[g];++g){if(this.trackRecursion&&(b.retainCount=b.retainCount+1||1,!0!==b.tested&&(b.tested=!0)),(f=c(b,e+p(t,b),i,n,s+1))instanceof o)return n[s]=[t.x,t.y],f;this.trackRecursion&&0==--b.retainCount&&(b.tested=!1),l>f&&(l=f)}return l}.bind(this),f=r.getNodeAt(t,e),d=r.getNodeAt(i,n),g=u(f,d);for(s=0;;++s){if(1/0===(l=c(f,0,g,a=[],0)))return[];if(l instanceof o)return a;g=l}return[]},e.exports=n},{"../core/DiagonalMovement":3,"../core/Heuristic":5,"../core/Node":6,"../core/Util":7}],18:[function(t,e,i){function n(t){r.call(this,t)}var r=t("./JumpPointFinderBase"),o=t("../core/DiagonalMovement");(n.prototype=new r).constructor=n,n.prototype._jump=function(t,e,i,n){var r=this.grid,o=t-i,s=e-n;if(!r.isWalkableAt(t,e))return null;if(!0===this.trackJumpRecursion&&(r.getNodeAt(t,e).tested=!0),r.getNodeAt(t,e)===this.endNode)return[t,e];if(0!==o&&0!==s){if(r.isWalkableAt(t-o,e+s)&&!r.isWalkableAt(t-o,e)||r.isWalkableAt(t+o,e-s)&&!r.isWalkableAt(t,e-s))return[t,e];if(this._jump(t+o,e,t,e)||this._jump(t,e+s,t,e))return[t,e]}else if(0!==o){if(r.isWalkableAt(t+o,e+1)&&!r.isWalkableAt(t,e+1)||r.isWalkableAt(t+o,e-1)&&!r.isWalkableAt(t,e-1))return[t,e]}else if(r.isWalkableAt(t+1,e+s)&&!r.isWalkableAt(t+1,e)||r.isWalkableAt(t-1,e+s)&&!r.isWalkableAt(t-1,e))return[t,e];return this._jump(t+o,e+s,t,e)},n.prototype._findNeighbors=function(t){var e,i,n,r,s,a,l,h,u=t.parent,p=t.x,c=t.y,f=this.grid,d=[];if(u)e=u.x,i=u.y,n=(p-e)/Math.max(Math.abs(p-e),1),r=(c-i)/Math.max(Math.abs(c-i),1),0!==n&&0!==r?(f.isWalkableAt(p,c+r)&&d.push([p,c+r]),f.isWalkableAt(p+n,c)&&d.push([p+n,c]),f.isWalkableAt(p+n,c+r)&&d.push([p+n,c+r]),f.isWalkableAt(p-n,c)||d.push([p-n,c+r]),f.isWalkableAt(p,c-r)||d.push([p+n,c-r])):0===n?(f.isWalkableAt(p,c+r)&&d.push([p,c+r]),f.isWalkableAt(p+1,c)||d.push([p+1,c+r]),f.isWalkableAt(p-1,c)||d.push([p-1,c+r])):(f.isWalkableAt(p+n,c)&&d.push([p+n,c]),f.isWalkableAt(p,c+1)||d.push([p+n,c+1]),f.isWalkableAt(p,c-1)||d.push([p+n,c-1]));else for(l=0,h=(s=f.getNeighbors(t,o.Always)).length;h>l;++l)a=s[l],d.push([a.x,a.y]);return d},e.exports=n},{"../core/DiagonalMovement":3,"./JumpPointFinderBase":23}],19:[function(t,e,i){function n(t){r.call(this,t)}var r=t("./JumpPointFinderBase"),o=t("../core/DiagonalMovement");(n.prototype=new r).constructor=n,n.prototype._jump=function(t,e,i,n){var r=this.grid,o=t-i,s=e-n;if(!r.isWalkableAt(t,e))return null;if(!0===this.trackJumpRecursion&&(r.getNodeAt(t,e).tested=!0),r.getNodeAt(t,e)===this.endNode)return[t,e];if(0!==o&&0!==s){if(r.isWalkableAt(t-o,e+s)&&!r.isWalkableAt(t-o,e)||r.isWalkableAt(t+o,e-s)&&!r.isWalkableAt(t,e-s))return[t,e];if(this._jump(t+o,e,t,e)||this._jump(t,e+s,t,e))return[t,e]}else if(0!==o){if(r.isWalkableAt(t+o,e+1)&&!r.isWalkableAt(t,e+1)||r.isWalkableAt(t+o,e-1)&&!r.isWalkableAt(t,e-1))return[t,e]}else if(r.isWalkableAt(t+1,e+s)&&!r.isWalkableAt(t+1,e)||r.isWalkableAt(t-1,e+s)&&!r.isWalkableAt(t-1,e))return[t,e];return r.isWalkableAt(t+o,e)||r.isWalkableAt(t,e+s)?this._jump(t+o,e+s,t,e):null},n.prototype._findNeighbors=function(t){var e,i,n,r,s,a,l,h,u=t.parent,p=t.x,c=t.y,f=this.grid,d=[];if(u)e=u.x,i=u.y,n=(p-e)/Math.max(Math.abs(p-e),1),r=(c-i)/Math.max(Math.abs(c-i),1),0!==n&&0!==r?(f.isWalkableAt(p,c+r)&&d.push([p,c+r]),f.isWalkableAt(p+n,c)&&d.push([p+n,c]),(f.isWalkableAt(p,c+r)||f.isWalkableAt(p+n,c))&&d.push([p+n,c+r]),!f.isWalkableAt(p-n,c)&&f.isWalkableAt(p,c+r)&&d.push([p-n,c+r]),!f.isWalkableAt(p,c-r)&&f.isWalkableAt(p+n,c)&&d.push([p+n,c-r])):0===n?f.isWalkableAt(p,c+r)&&(d.push([p,c+r]),f.isWalkableAt(p+1,c)||d.push([p+1,c+r]),f.isWalkableAt(p-1,c)||d.push([p-1,c+r])):f.isWalkableAt(p+n,c)&&(d.push([p+n,c]),f.isWalkableAt(p,c+1)||d.push([p+n,c+1]),f.isWalkableAt(p,c-1)||d.push([p+n,c-1]));else for(l=0,h=(s=f.getNeighbors(t,o.IfAtMostOneObstacle)).length;h>l;++l)a=s[l],d.push([a.x,a.y]);return d},e.exports=n},{"../core/DiagonalMovement":3,"./JumpPointFinderBase":23}],20:[function(t,e,i){function n(t){r.call(this,t)}var r=t("./JumpPointFinderBase"),o=t("../core/DiagonalMovement");(n.prototype=new r).constructor=n,n.prototype._jump=function(t,e,i,n){var r=this.grid,o=t-i,s=e-n;if(!r.isWalkableAt(t,e))return null;if(!0===this.trackJumpRecursion&&(r.getNodeAt(t,e).tested=!0),r.getNodeAt(t,e)===this.endNode)return[t,e];if(0!==o&&0!==s){if(this._jump(t+o,e,t,e)||this._jump(t,e+s,t,e))return[t,e]}else if(0!==o){if(r.isWalkableAt(t,e-1)&&!r.isWalkableAt(t-o,e-1)||r.isWalkableAt(t,e+1)&&!r.isWalkableAt(t-o,e+1))return[t,e]}else if(0!==s&&(r.isWalkableAt(t-1,e)&&!r.isWalkableAt(t-1,e-s)||r.isWalkableAt(t+1,e)&&!r.isWalkableAt(t+1,e-s)))return[t,e];return r.isWalkableAt(t+o,e)&&r.isWalkableAt(t,e+s)?this._jump(t+o,e+s,t,e):null},n.prototype._findNeighbors=function(t){var e,i,n,r,s,a,l,h,u=t.parent,p=t.x,c=t.y,f=this.grid,d=[];if(u)if(e=u.x,i=u.y,n=(p-e)/Math.max(Math.abs(p-e),1),r=(c-i)/Math.max(Math.abs(c-i),1),0!==n&&0!==r)f.isWalkableAt(p,c+r)&&d.push([p,c+r]),f.isWalkableAt(p+n,c)&&d.push([p+n,c]),f.isWalkableAt(p,c+r)&&f.isWalkableAt(p+n,c)&&d.push([p+n,c+r]);else{var g;if(0!==n){g=f.isWalkableAt(p+n,c);var b=f.isWalkableAt(p,c+1),v=f.isWalkableAt(p,c-1);g&&(d.push([p+n,c]),b&&d.push([p+n,c+1]),v&&d.push([p+n,c-1])),b&&d.push([p,c+1]),v&&d.push([p,c-1])}else if(0!==r){g=f.isWalkableAt(p,c+r);var A=f.isWalkableAt(p+1,c),m=f.isWalkableAt(p-1,c);g&&(d.push([p,c+r]),A&&d.push([p+1,c+r]),m&&d.push([p-1,c+r])),A&&d.push([p+1,c]),m&&d.push([p-1,c])}}else for(l=0,h=(s=f.getNeighbors(t,o.OnlyWhenNoObstacles)).length;h>l;++l)a=s[l],d.push([a.x,a.y]);return d},e.exports=n},{"../core/DiagonalMovement":3,"./JumpPointFinderBase":23}],21:[function(t,e,i){function n(t){r.call(this,t)}var r=t("./JumpPointFinderBase"),o=t("../core/DiagonalMovement");(n.prototype=new r).constructor=n,n.prototype._jump=function(t,e,i,n){var r=this.grid,o=t-i,s=e-n;if(!r.isWalkableAt(t,e))return null;if(!0===this.trackJumpRecursion&&(r.getNodeAt(t,e).tested=!0),r.getNodeAt(t,e)===this.endNode)return[t,e];if(0!==o){if(r.isWalkableAt(t,e-1)&&!r.isWalkableAt(t-o,e-1)||r.isWalkableAt(t,e+1)&&!r.isWalkableAt(t-o,e+1))return[t,e]}else{if(0===s)throw new Error("Only horizontal and vertical movements are allowed");if(r.isWalkableAt(t-1,e)&&!r.isWalkableAt(t-1,e-s)||r.isWalkableAt(t+1,e)&&!r.isWalkableAt(t+1,e-s))return[t,e];if(this._jump(t+1,e,t,e)||this._jump(t-1,e,t,e))return[t,e]}return this._jump(t+o,e+s,t,e)},n.prototype._findNeighbors=function(t){var e,i,n,r,s,a,l,h,u=t.parent,p=t.x,c=t.y,f=this.grid,d=[];if(u)e=u.x,i=u.y,n=(p-e)/Math.max(Math.abs(p-e),1),r=(c-i)/Math.max(Math.abs(c-i),1),0!==n?(f.isWalkableAt(p,c-1)&&d.push([p,c-1]),f.isWalkableAt(p,c+1)&&d.push([p,c+1]),f.isWalkableAt(p+n,c)&&d.push([p+n,c])):0!==r&&(f.isWalkableAt(p-1,c)&&d.push([p-1,c]),f.isWalkableAt(p+1,c)&&d.push([p+1,c]),f.isWalkableAt(p,c+r)&&d.push([p,c+r]));else for(l=0,h=(s=f.getNeighbors(t,o.Never)).length;h>l;++l)a=s[l],d.push([a.x,a.y]);return d},e.exports=n},{"../core/DiagonalMovement":3,"./JumpPointFinderBase":23}],22:[function(t,e,i){var n=t("../core/DiagonalMovement"),r=t("./JPFNeverMoveDiagonally"),o=t("./JPFAlwaysMoveDiagonally"),s=t("./JPFMoveDiagonallyIfNoObstacles"),a=t("./JPFMoveDiagonallyIfAtMostOneObstacle");e.exports=function(t){return(t=t||{}).diagonalMovement===n.Never?new r(t):t.diagonalMovement===n.Always?new o(t):t.diagonalMovement===n.OnlyWhenNoObstacles?new s(t):new a(t)}},{"../core/DiagonalMovement":3,"./JPFAlwaysMoveDiagonally":18,"./JPFMoveDiagonallyIfAtMostOneObstacle":19,"./JPFMoveDiagonallyIfNoObstacles":20,"./JPFNeverMoveDiagonally":21}],23:[function(t,e,i){function n(t){t=t||{},this.heuristic=t.heuristic||s.manhattan,this.trackJumpRecursion=t.trackJumpRecursion||!1}var r=t("heap"),o=t("../core/Util"),s=t("../core/Heuristic");t("../core/DiagonalMovement"),n.prototype.findPath=function(t,e,i,n,s){var a,l=this.openList=new r(function(t,e){return t.f-e.f}),h=this.startNode=s.getNodeAt(t,e),u=this.endNode=s.getNodeAt(i,n);for(this.grid=s,h.g=0,h.f=0,l.push(h),h.opened=!0;!l.empty();){if((a=l.pop()).closed=!0,a===u)return o.expandPath(o.backtrace(u));this._identifySuccessors(a)}return[]},n.prototype._identifySuccessors=function(t){var e,i,n,r,o,a,l,h,u,p,c=this.grid,f=this.heuristic,d=this.openList,g=this.endNode.x,b=this.endNode.y,v=t.x,A=t.y,m=Math.abs;for(Math.max,r=0,o=(e=this._findNeighbors(t)).length;o>r;++r)if(i=e[r],n=this._jump(i[0],i[1],v,A)){if(a=n[0],l=n[1],(p=c.getNodeAt(a,l)).closed)continue;h=s.octile(m(a-v),m(l-A)),u=t.g+h,(!p.opened||u<p.g)&&(p.g=u,p.h=p.h||f(m(a-g),m(l-b)),p.f=p.g+p.h,p.parent=t,p.opened?d.updateItem(p):(d.push(p),p.opened=!0))}},e.exports=n},{"../core/DiagonalMovement":3,"../core/Heuristic":5,"../core/Util":7,heap:1}]},{},[8])(8)});window.API_SERVER = "http://85.192.30.120:80/";
