FILE=$1     
if [ -f $FILE ]; then
   echo "File exists."
else
   echo "File $FILE does not exist."
fi