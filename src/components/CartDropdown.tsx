
import { useState } from 'react';
import { useCart } from './CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ShoppingCart, Plus, Minus, Trash2, CreditCard } from 'lucide-react';

const CartDropdown = () => {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  if (totalItems === 0) {
    return (
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button 
            variant="ghost" 
            size="sm" 
            className="relative text-gray-300 hover:text-green-400 hover:bg-green-500/10"
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 bg-gray-900 border-gray-800" align="end">
          <div className="text-center py-8">
            <ShoppingCart className="h-12 w-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">Your cart is empty</p>
            <p className="text-gray-500 text-sm mt-2">Add some trusted products to get started</p>
          </div>
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="relative text-gray-300 hover:text-green-400 hover:bg-green-500/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
        >
          <ShoppingCart className="h-5 w-5" />
          <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-green-500 text-black text-xs p-0 flex items-center justify-center animate-pulse">
            {totalItems}
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 bg-gray-900 border-gray-800" align="end">
        <Card className="bg-transparent border-none shadow-none">
          <CardHeader className="pb-4">
            <CardTitle className="text-white flex items-center">
              <ShoppingCart className="h-5 w-5 mr-2 text-green-400" />
              Shopping Cart ({totalItems} items)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 max-h-80 overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 p-3 bg-gray-800/50 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-green-400 text-xs font-bold">{item.category[0]}</span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-white text-sm truncate">{item.title}</h4>
                  <p className="text-green-400 font-bold text-sm">${item.price}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 text-gray-400 hover:text-white"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="text-white text-sm w-6 text-center">{item.quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 text-gray-400 hover:text-white"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 text-red-400 hover:text-red-300"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </CardContent>
          
          <div className="border-t border-gray-800 pt-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-white">Total:</span>
              <span className="font-bold text-green-400 text-lg">${totalPrice.toFixed(2)}</span>
            </div>
            
            <Button 
              className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold"
              onClick={() => setIsOpen(false)}
            >
              <CreditCard className="h-4 w-4 mr-2" />
              Proceed to Checkout
            </Button>
          </div>
        </Card>
      </PopoverContent>
    </Popover>
  );
};

export default CartDropdown;
