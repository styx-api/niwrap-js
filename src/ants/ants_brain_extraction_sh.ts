// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const ANTS_BRAIN_EXTRACTION_SH_METADATA: Metadata = {
    id: "acef12aad7368f10e5b7b7798f7a9e605c5cbd67.boutiques",
    name: "antsBrainExtraction.sh",
    package: "ants",
    container_image_tag: "antsx/ants:v2.5.3",
};


interface AntsBrainExtractionShParameters {
    "__STYXTYPE__": "antsBrainExtraction.sh";
    "image_dimension": number;
    "anatomical_image": InputPathType;
    "template": InputPathType;
    "probability_mask": InputPathType;
    "tissue_classification"?: string | null | undefined;
    "brain_extraction_registration_mask"?: InputPathType | null | undefined;
    "keep_temporary_files": boolean;
    "single_floating_point_precision": boolean;
    "initial_moving_transform"?: InputPathType | null | undefined;
    "rotation_search_params"?: string | null | undefined;
    "image_file_suffix"?: string | null | undefined;
    "translation_search_params"?: string | null | undefined;
    "random_seeding": boolean;
    "debug_mode": boolean;
    "output_prefix"?: string | null | undefined;
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
        "antsBrainExtraction.sh": ants_brain_extraction_sh_cargs,
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
        "antsBrainExtraction.sh": ants_brain_extraction_sh_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `ants_brain_extraction_sh(...)`.
 *
 * @interface
 */
interface AntsBrainExtractionShOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Brain extracted image
     */
    brain_extracted_image: OutputPathType | null;
    /**
     * Brain mask
     */
    brain_mask: OutputPathType | null;
    /**
     * Brain probability mask
     */
    brain_probability_mask: OutputPathType | null;
}


function ants_brain_extraction_sh_params(
    anatomical_image: InputPathType,
    template: InputPathType,
    probability_mask: InputPathType,
    image_dimension: number = 3,
    tissue_classification: string | null = null,
    brain_extraction_registration_mask: InputPathType | null = null,
    keep_temporary_files: boolean = false,
    single_floating_point_precision: boolean = false,
    initial_moving_transform: InputPathType | null = null,
    rotation_search_params: string | null = null,
    image_file_suffix: string | null = null,
    translation_search_params: string | null = null,
    random_seeding: boolean = false,
    debug_mode: boolean = false,
    output_prefix: string | null = "output",
): AntsBrainExtractionShParameters {
    /**
     * Build parameters.
    
     * @param anatomical_image Anatomical image (Structural image, typically T1)
     * @param template Brain extraction template (Anatomical template)
     * @param probability_mask Brain extraction probability mask
     * @param image_dimension Image dimension (2 or 3)
     * @param tissue_classification Tissue classification
     * @param brain_extraction_registration_mask Brain extraction registration mask
     * @param keep_temporary_files Keep temporary files
     * @param single_floating_point_precision Use single floating point precision
     * @param initial_moving_transform Initial moving transform
     * @param rotation_search_params Rotation search parameters
     * @param image_file_suffix Image file suffix
     * @param translation_search_params Translation search parameters
     * @param random_seeding Use random seeding
     * @param debug_mode Test / debug mode
     * @param output_prefix Output prefix
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "antsBrainExtraction.sh" as const,
        "image_dimension": image_dimension,
        "anatomical_image": anatomical_image,
        "template": template,
        "probability_mask": probability_mask,
        "keep_temporary_files": keep_temporary_files,
        "single_floating_point_precision": single_floating_point_precision,
        "random_seeding": random_seeding,
        "debug_mode": debug_mode,
    };
    if (tissue_classification !== null) {
        params["tissue_classification"] = tissue_classification;
    }
    if (brain_extraction_registration_mask !== null) {
        params["brain_extraction_registration_mask"] = brain_extraction_registration_mask;
    }
    if (initial_moving_transform !== null) {
        params["initial_moving_transform"] = initial_moving_transform;
    }
    if (rotation_search_params !== null) {
        params["rotation_search_params"] = rotation_search_params;
    }
    if (image_file_suffix !== null) {
        params["image_file_suffix"] = image_file_suffix;
    }
    if (translation_search_params !== null) {
        params["translation_search_params"] = translation_search_params;
    }
    if (output_prefix !== null) {
        params["output_prefix"] = output_prefix;
    }
    return params;
}


function ants_brain_extraction_sh_cargs(
    params: AntsBrainExtractionShParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("antsBrainExtraction.sh");
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
        execution.inputFile((params["template"] ?? null))
    );
    cargs.push(
        "-m",
        execution.inputFile((params["probability_mask"] ?? null))
    );
    if ((params["tissue_classification"] ?? null) !== null) {
        cargs.push(
            "-c",
            (params["tissue_classification"] ?? null)
        );
    }
    if ((params["brain_extraction_registration_mask"] ?? null) !== null) {
        cargs.push(
            "-f",
            execution.inputFile((params["brain_extraction_registration_mask"] ?? null))
        );
    }
    if ((params["keep_temporary_files"] ?? null)) {
        cargs.push("-k");
    }
    if ((params["single_floating_point_precision"] ?? null)) {
        cargs.push("-q");
    }
    if ((params["initial_moving_transform"] ?? null) !== null) {
        cargs.push(
            "-r",
            execution.inputFile((params["initial_moving_transform"] ?? null))
        );
    }
    if ((params["rotation_search_params"] ?? null) !== null) {
        cargs.push(
            "-R",
            (params["rotation_search_params"] ?? null)
        );
    }
    if ((params["image_file_suffix"] ?? null) !== null) {
        cargs.push(
            "-s",
            (params["image_file_suffix"] ?? null)
        );
    }
    if ((params["translation_search_params"] ?? null) !== null) {
        cargs.push(
            "-T",
            (params["translation_search_params"] ?? null)
        );
    }
    if ((params["random_seeding"] ?? null)) {
        cargs.push("-u");
    }
    if ((params["debug_mode"] ?? null)) {
        cargs.push("-z");
    }
    if ((params["output_prefix"] ?? null) !== null) {
        cargs.push(
            "-o",
            (params["output_prefix"] ?? null)
        );
    }
    return cargs;
}


function ants_brain_extraction_sh_outputs(
    params: AntsBrainExtractionShParameters,
    execution: Execution,
): AntsBrainExtractionShOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: AntsBrainExtractionShOutputs = {
        root: execution.outputFile("."),
        brain_extracted_image: ((params["output_prefix"] ?? null) !== null) ? execution.outputFile([(params["output_prefix"] ?? null), "_BrainExtractionBrain.nii.gz"].join('')) : null,
        brain_mask: ((params["output_prefix"] ?? null) !== null) ? execution.outputFile([(params["output_prefix"] ?? null), "_BrainExtractionMask.nii.gz"].join('')) : null,
        brain_probability_mask: ((params["output_prefix"] ?? null) !== null) ? execution.outputFile([(params["output_prefix"] ?? null), "_BrainExtractionPrior0GenericAffine.mat"].join('')) : null,
    };
    return ret;
}


function ants_brain_extraction_sh_execute(
    params: AntsBrainExtractionShParameters,
    execution: Execution,
): AntsBrainExtractionShOutputs {
    /**
     * antsBrainExtraction.sh performs template-based brain extraction.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `AntsBrainExtractionShOutputs`).
     */
    params = execution.params(params)
    const cargs = ants_brain_extraction_sh_cargs(params, execution)
    const ret = ants_brain_extraction_sh_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function ants_brain_extraction_sh(
    anatomical_image: InputPathType,
    template: InputPathType,
    probability_mask: InputPathType,
    image_dimension: number = 3,
    tissue_classification: string | null = null,
    brain_extraction_registration_mask: InputPathType | null = null,
    keep_temporary_files: boolean = false,
    single_floating_point_precision: boolean = false,
    initial_moving_transform: InputPathType | null = null,
    rotation_search_params: string | null = null,
    image_file_suffix: string | null = null,
    translation_search_params: string | null = null,
    random_seeding: boolean = false,
    debug_mode: boolean = false,
    output_prefix: string | null = "output",
    runner: Runner | null = null,
): AntsBrainExtractionShOutputs {
    /**
     * antsBrainExtraction.sh performs template-based brain extraction.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param anatomical_image Anatomical image (Structural image, typically T1)
     * @param template Brain extraction template (Anatomical template)
     * @param probability_mask Brain extraction probability mask
     * @param image_dimension Image dimension (2 or 3)
     * @param tissue_classification Tissue classification
     * @param brain_extraction_registration_mask Brain extraction registration mask
     * @param keep_temporary_files Keep temporary files
     * @param single_floating_point_precision Use single floating point precision
     * @param initial_moving_transform Initial moving transform
     * @param rotation_search_params Rotation search parameters
     * @param image_file_suffix Image file suffix
     * @param translation_search_params Translation search parameters
     * @param random_seeding Use random seeding
     * @param debug_mode Test / debug mode
     * @param output_prefix Output prefix
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `AntsBrainExtractionShOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(ANTS_BRAIN_EXTRACTION_SH_METADATA);
    const params = ants_brain_extraction_sh_params(anatomical_image, template, probability_mask, image_dimension, tissue_classification, brain_extraction_registration_mask, keep_temporary_files, single_floating_point_precision, initial_moving_transform, rotation_search_params, image_file_suffix, translation_search_params, random_seeding, debug_mode, output_prefix)
    return ants_brain_extraction_sh_execute(params, execution);
}


export {
      ANTS_BRAIN_EXTRACTION_SH_METADATA,
      AntsBrainExtractionShOutputs,
      AntsBrainExtractionShParameters,
      ants_brain_extraction_sh,
      ants_brain_extraction_sh_params,
};
