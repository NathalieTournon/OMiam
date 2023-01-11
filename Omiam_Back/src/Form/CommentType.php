<?php

namespace App\Form;

use App\Entity\Comment;
use App\Entity\Recipe;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CommentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('content', TextareaType::class, [
                'label' => "Contenu du commentaire"
            ])
            // ->add('createdAt')
            // ->add('updatedAt')
            ->add('recipe', EntityType::class, [
                'class' => Recipe::class,
                'choice_label' => 'title',
                'label' => 'Recette du commentaire'
            ])
            ->add('user', EntityType::class, [
                'class' => User::class,
                'label' => 'Utilisateur du commentaire'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Comment::class,
        ]);
    }
}
