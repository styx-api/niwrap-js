// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const VECREG_METADATA: Metadata = {
    id: "5064b1425f46565055c7ced1a7351b8b583c894d.boutiques",
    name: "vecreg",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface VecregParameters {
    "__STYXTYPE__": "vecreg";
    "input_file": InputPathType;
    "output_file": string;
    "reference_volume": InputPathType;
    "transform_file"?: InputPathType | null | undefined;
    "verbose_flag": boolean;
    "help_flag": boolean;
    "secondary_affine"?: InputPathType | null | undefined;
    "secondary_warp"?: InputPathType | null | undefined;
    "interp_method"?: string | null | undefined;
    "brain_mask"?: InputPathType | null | undefined;
    "ref_brain_mask"?: InputPathType | null | undefined;
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
        "vecreg": vecreg_cargs,
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
        "vecreg": vecreg_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `vecreg(...)`.
 *
 * @interface
 */
interface VecregOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file of registered vector or tensor field
     */
    registered_output: OutputPathType;
}


function vecreg_params(
    input_file: InputPathType,
    output_file: string,
    reference_volume: InputPathType,
    transform_file: InputPathType | null = null,
    verbose_flag: boolean = false,
    help_flag: boolean = false,
    secondary_affine: InputPathType | null = null,
    secondary_warp: InputPathType | null = null,
    interp_method: string | null = "trilinear",
    brain_mask: InputPathType | null = null,
    ref_brain_mask: InputPathType | null = null,
): VecregParameters {
    /**
     * Build parameters.
    
     * @param input_file Filename for input vector or tensor field
     * @param output_file Filename for output registered vector or tensor field
     * @param reference_volume Filename for reference (target) volume
     * @param transform_file Filename for affine transformation matrix
     * @param verbose_flag Switch on diagnostic messages
     * @param help_flag Display help message
     * @param secondary_affine Filename for secondary affine matrix; if set, this will be used for the rotation of the vector/tensor field
     * @param secondary_warp Filename for secondary warp field; if set, this will be used for the rotation of the vector/tensor field
     * @param interp_method Interpolation method (nearestneighbour, trilinear (default), sinc, or spline)
     * @param brain_mask Brain mask in input space
     * @param ref_brain_mask Brain mask in output space (useful for speed up of nonlinear registration)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "vecreg" as const,
        "input_file": input_file,
        "output_file": output_file,
        "reference_volume": reference_volume,
        "verbose_flag": verbose_flag,
        "help_flag": help_flag,
    };
    if (transform_file !== null) {
        params["transform_file"] = transform_file;
    }
    if (secondary_affine !== null) {
        params["secondary_affine"] = secondary_affine;
    }
    if (secondary_warp !== null) {
        params["secondary_warp"] = secondary_warp;
    }
    if (interp_method !== null) {
        params["interp_method"] = interp_method;
    }
    if (brain_mask !== null) {
        params["brain_mask"] = brain_mask;
    }
    if (ref_brain_mask !== null) {
        params["ref_brain_mask"] = ref_brain_mask;
    }
    return params;
}


function vecreg_cargs(
    params: VecregParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("vecreg");
    cargs.push(
        "-i",
        execution.inputFile((params["input_file"] ?? null))
    );
    cargs.push(
        "-o",
        (params["output_file"] ?? null)
    );
    cargs.push(
        "-r",
        execution.inputFile((params["reference_volume"] ?? null))
    );
    if ((params["transform_file"] ?? null) !== null) {
        cargs.push(
            "-t",
            execution.inputFile((params["transform_file"] ?? null))
        );
    }
    if ((params["verbose_flag"] ?? null)) {
        cargs.push("-v");
    }
    if ((params["help_flag"] ?? null)) {
        cargs.push("-h");
    }
    if ((params["secondary_affine"] ?? null) !== null) {
        cargs.push(
            "--rotmat",
            execution.inputFile((params["secondary_affine"] ?? null))
        );
    }
    if ((params["secondary_warp"] ?? null) !== null) {
        cargs.push(
            "--rotwarp",
            execution.inputFile((params["secondary_warp"] ?? null))
        );
    }
    if ((params["interp_method"] ?? null) !== null) {
        cargs.push(
            "--interp",
            (params["interp_method"] ?? null)
        );
    }
    if ((params["brain_mask"] ?? null) !== null) {
        cargs.push(
            "-m",
            execution.inputFile((params["brain_mask"] ?? null))
        );
    }
    if ((params["ref_brain_mask"] ?? null) !== null) {
        cargs.push(
            "--refmask",
            execution.inputFile((params["ref_brain_mask"] ?? null))
        );
    }
    return cargs;
}


function vecreg_outputs(
    params: VecregParameters,
    execution: Execution,
): VecregOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VecregOutputs = {
        root: execution.outputFile("."),
        registered_output: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function vecreg_execute(
    params: VecregParameters,
    execution: Execution,
): VecregOutputs {
    /**
     * Vector Affine/NonLinear Transformation with Orientation Preservation.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VecregOutputs`).
     */
    params = execution.params(params)
    const cargs = vecreg_cargs(params, execution)
    const ret = vecreg_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function vecreg(
    input_file: InputPathType,
    output_file: string,
    reference_volume: InputPathType,
    transform_file: InputPathType | null = null,
    verbose_flag: boolean = false,
    help_flag: boolean = false,
    secondary_affine: InputPathType | null = null,
    secondary_warp: InputPathType | null = null,
    interp_method: string | null = "trilinear",
    brain_mask: InputPathType | null = null,
    ref_brain_mask: InputPathType | null = null,
    runner: Runner | null = null,
): VecregOutputs {
    /**
     * Vector Affine/NonLinear Transformation with Orientation Preservation.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input_file Filename for input vector or tensor field
     * @param output_file Filename for output registered vector or tensor field
     * @param reference_volume Filename for reference (target) volume
     * @param transform_file Filename for affine transformation matrix
     * @param verbose_flag Switch on diagnostic messages
     * @param help_flag Display help message
     * @param secondary_affine Filename for secondary affine matrix; if set, this will be used for the rotation of the vector/tensor field
     * @param secondary_warp Filename for secondary warp field; if set, this will be used for the rotation of the vector/tensor field
     * @param interp_method Interpolation method (nearestneighbour, trilinear (default), sinc, or spline)
     * @param brain_mask Brain mask in input space
     * @param ref_brain_mask Brain mask in output space (useful for speed up of nonlinear registration)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VecregOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(VECREG_METADATA);
    const params = vecreg_params(input_file, output_file, reference_volume, transform_file, verbose_flag, help_flag, secondary_affine, secondary_warp, interp_method, brain_mask, ref_brain_mask)
    return vecreg_execute(params, execution);
}


export {
      VECREG_METADATA,
      VecregOutputs,
      VecregParameters,
      vecreg,
      vecreg_params,
};
