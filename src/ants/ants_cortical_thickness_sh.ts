// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const ANTS_CORTICAL_THICKNESS_SH_METADATA: Metadata = {
    id: "927ff3d34dcb64b2fcbc355449b1223268e7ab32.boutiques",
    name: "antsCorticalThickness.sh",
    package: "ants",
    container_image_tag: "antsx/ants:v2.5.3",
};


interface AntsCorticalThicknessShParameters {
    "__STYXTYPE__": "antsCorticalThickness.sh";
    "image_dimension": 2 | 3;
    "anatomical_image": InputPathType;
    "brain_template": InputPathType;
    "brain_extraction_probability_mask": InputPathType;
    "brain_segmentation_priors": string;
    "output_prefix": string;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "antsCorticalThickness.sh": ants_cortical_thickness_sh_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
        "antsCorticalThickness.sh": ants_cortical_thickness_sh_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `ants_cortical_thickness_sh(...)`.
 *
 * @interface
 */
interface AntsCorticalThicknessShOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The output cortical thickness map.
     */
    cortical_thickness: OutputPathType;
    /**
     * The brain extraction mask.
     */
    brain_extraction_mask: OutputPathType;
    /**
     * The brain segmentation image.
     */
    brain_segmentation: OutputPathType;
    /**
     * The segmentation posteriors for different tissue classes.
     */
    segmentation_posteriors: OutputPathType;
}


function ants_cortical_thickness_sh_params(
    image_dimension: 2 | 3,
    anatomical_image: InputPathType,
    brain_template: InputPathType,
    brain_extraction_probability_mask: InputPathType,
    brain_segmentation_priors: string,
    output_prefix: string,
): AntsCorticalThicknessShParameters {
    /**
     * Build parameters.
    
     * @param image_dimension 2 or 3 for 2- or 3-dimensional image
     * @param anatomical_image Structural intensity image, typically T1.
     * @param brain_template Anatomical intensity template. This template is not skull-stripped.
     * @param brain_extraction_probability_mask Brain probability mask in the segmentation template space. A binary mask is acceptable.
     * @param brain_segmentation_priors Tissue probability priors corresponding to the template image specified with the -e option. At least four priors must exist, corresponding to CSF, Cortical GM, WM, Subcortical GM.
     * @param output_prefix Output prefix for the generated filenames.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "antsCorticalThickness.sh" as const,
        "image_dimension": image_dimension,
        "anatomical_image": anatomical_image,
        "brain_template": brain_template,
        "brain_extraction_probability_mask": brain_extraction_probability_mask,
        "brain_segmentation_priors": brain_segmentation_priors,
        "output_prefix": output_prefix,
    };
    return params;
}


function ants_cortical_thickness_sh_cargs(
    params: AntsCorticalThicknessShParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("antsCorticalThickness.sh");
    cargs.push(
        "-d",
        String((params["image_dimension"] ?? null))
    );
    cargs.push(
        "-a",
        execution.inputFile((params["anatomical_image"] ?? null))
    );
    cargs.push(
        "-e",
        execution.inputFile((params["brain_template"] ?? null))
    );
    cargs.push(
        "-m",
        execution.inputFile((params["brain_extraction_probability_mask"] ?? null))
    );
    cargs.push(
        "-p",
        (params["brain_segmentation_priors"] ?? null)
    );
    cargs.push("[ADDITIONAL_PARAMETERS]");
    cargs.push(
        "-o",
        (params["output_prefix"] ?? null)
    );
    return cargs;
}


function ants_cortical_thickness_sh_outputs(
    params: AntsCorticalThicknessShParameters,
    execution: Execution,
): AntsCorticalThicknessShOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: AntsCorticalThicknessShOutputs = {
        root: execution.outputFile("."),
        cortical_thickness: execution.outputFile([(params["output_prefix"] ?? null), "CorticalThickness.nii.gz"].join('')),
        brain_extraction_mask: execution.outputFile([(params["output_prefix"] ?? null), "BrainExtractionMask.nii.gz"].join('')),
        brain_segmentation: execution.outputFile([(params["output_prefix"] ?? null), "BrainSegmentation.nii.gz"].join('')),
        segmentation_posteriors: execution.outputFile([(params["output_prefix"] ?? null), "BrainSegmentationPosteriors*.nii.gz"].join('')),
    };
    return ret;
}


function ants_cortical_thickness_sh_execute(
    params: AntsCorticalThicknessShParameters,
    execution: Execution,
): AntsCorticalThicknessShOutputs {
    /**
     * This script performs T1 anatomical brain processing including brain extraction, brain n-tissue segmentation, cortical thickness estimation, and optional registration to a template.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `AntsCorticalThicknessShOutputs`).
     */
    params = execution.params(params)
    const cargs = ants_cortical_thickness_sh_cargs(params, execution)
    const ret = ants_cortical_thickness_sh_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function ants_cortical_thickness_sh(
    image_dimension: 2 | 3,
    anatomical_image: InputPathType,
    brain_template: InputPathType,
    brain_extraction_probability_mask: InputPathType,
    brain_segmentation_priors: string,
    output_prefix: string,
    runner: Runner | null = null,
): AntsCorticalThicknessShOutputs {
    /**
     * This script performs T1 anatomical brain processing including brain extraction, brain n-tissue segmentation, cortical thickness estimation, and optional registration to a template.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param image_dimension 2 or 3 for 2- or 3-dimensional image
     * @param anatomical_image Structural intensity image, typically T1.
     * @param brain_template Anatomical intensity template. This template is not skull-stripped.
     * @param brain_extraction_probability_mask Brain probability mask in the segmentation template space. A binary mask is acceptable.
     * @param brain_segmentation_priors Tissue probability priors corresponding to the template image specified with the -e option. At least four priors must exist, corresponding to CSF, Cortical GM, WM, Subcortical GM.
     * @param output_prefix Output prefix for the generated filenames.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `AntsCorticalThicknessShOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(ANTS_CORTICAL_THICKNESS_SH_METADATA);
    const params = ants_cortical_thickness_sh_params(image_dimension, anatomical_image, brain_template, brain_extraction_probability_mask, brain_segmentation_priors, output_prefix)
    return ants_cortical_thickness_sh_execute(params, execution);
}


export {
      ANTS_CORTICAL_THICKNESS_SH_METADATA,
      AntsCorticalThicknessShOutputs,
      AntsCorticalThicknessShParameters,
      ants_cortical_thickness_sh,
      ants_cortical_thickness_sh_params,
};
