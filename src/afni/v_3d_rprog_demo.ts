// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_RPROG_DEMO_METADATA: Metadata = {
    id: "9ea0856bd790ad5ea87b3e458b8bf8d36950ad92.boutiques",
    name: "3dRprogDemo",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dRprogDemoParameters {
    "__STYXTYPE__": "3dRprogDemo";
    "input_dsets": Array<InputPathType>;
    "mask"?: InputPathType | null | undefined;
    "scale": number;
    "prefix": string;
    "help_aspx": boolean;
    "help_raw": boolean;
    "help_spx": boolean;
    "help_txt": boolean;
    "help": boolean;
    "show_allowed_options": boolean;
    "verbosity_level"?: number | null | undefined;
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
        "3dRprogDemo": v_3d_rprog_demo_cargs,
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
        "3dRprogDemo": v_3d_rprog_demo_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_rprog_demo(...)`.
 *
 * @interface
 */
interface V3dRprogDemoOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file with the specified prefix.
     */
    output_file: OutputPathType;
}


function v_3d_rprog_demo_params(
    input_dsets: Array<InputPathType>,
    scale: number,
    prefix: string,
    mask: InputPathType | null = null,
    help_aspx: boolean = false,
    help_raw: boolean = false,
    help_spx: boolean = false,
    help_txt: boolean = false,
    help: boolean = false,
    show_allowed_options: boolean = false,
    verbosity_level: number | null = null,
): V3dRprogDemoParameters {
    /**
     * Build parameters.
    
     * @param input_dsets Input dataset(s) to be scaled.
     * @param scale Multiply each voxel by SS
     * @param prefix Output prefix (just prefix, no view+suffix needed).
     * @param mask Process voxels inside this mask only. Default is no masking.
     * @param help_aspx Display help message with autolabeling.
     * @param help_raw Display raw help message as in the code.
     * @param help_spx Display help message in sphinx format.
     * @param help_txt Display help message in simple text.
     * @param help Display help message in simple text.
     * @param show_allowed_options List of allowed options.
     * @param verbosity_level Verbosity level. 0 for quiet (Default). 1 or more: talkative.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dRprogDemo" as const,
        "input_dsets": input_dsets,
        "scale": scale,
        "prefix": prefix,
        "help_aspx": help_aspx,
        "help_raw": help_raw,
        "help_spx": help_spx,
        "help_txt": help_txt,
        "help": help,
        "show_allowed_options": show_allowed_options,
    };
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (verbosity_level !== null) {
        params["verbosity_level"] = verbosity_level;
    }
    return params;
}


function v_3d_rprog_demo_cargs(
    params: V3dRprogDemoParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dRprogDemo");
    cargs.push(...(params["input_dsets"] ?? null).map(f => execution.inputFile(f)));
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    cargs.push(
        "-scale",
        String((params["scale"] ?? null))
    );
    cargs.push(
        "-prefix",
        (params["prefix"] ?? null)
    );
    if ((params["help_aspx"] ?? null)) {
        cargs.push("-h_aspx");
    }
    if ((params["help_raw"] ?? null)) {
        cargs.push("-h_raw");
    }
    if ((params["help_spx"] ?? null)) {
        cargs.push("-h_spx");
    }
    if ((params["help_txt"] ?? null)) {
        cargs.push("-h_txt");
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["show_allowed_options"] ?? null)) {
        cargs.push("-show_allowed_options");
    }
    if ((params["verbosity_level"] ?? null) !== null) {
        cargs.push(
            "-verb",
            String((params["verbosity_level"] ?? null))
        );
    }
    return cargs;
}


function v_3d_rprog_demo_outputs(
    params: V3dRprogDemoParameters,
    execution: Execution,
): V3dRprogDemoOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dRprogDemoOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([(params["prefix"] ?? null), ".nii"].join('')),
    };
    return ret;
}


function v_3d_rprog_demo_execute(
    params: V3dRprogDemoParameters,
    execution: Execution,
): V3dRprogDemoOutputs {
    /**
     * Template program to help users write their own R processing routines on MRI volumes.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dRprogDemoOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_rprog_demo_cargs(params, execution)
    const ret = v_3d_rprog_demo_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_rprog_demo(
    input_dsets: Array<InputPathType>,
    scale: number,
    prefix: string,
    mask: InputPathType | null = null,
    help_aspx: boolean = false,
    help_raw: boolean = false,
    help_spx: boolean = false,
    help_txt: boolean = false,
    help: boolean = false,
    show_allowed_options: boolean = false,
    verbosity_level: number | null = null,
    runner: Runner | null = null,
): V3dRprogDemoOutputs {
    /**
     * Template program to help users write their own R processing routines on MRI volumes.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_dsets Input dataset(s) to be scaled.
     * @param scale Multiply each voxel by SS
     * @param prefix Output prefix (just prefix, no view+suffix needed).
     * @param mask Process voxels inside this mask only. Default is no masking.
     * @param help_aspx Display help message with autolabeling.
     * @param help_raw Display raw help message as in the code.
     * @param help_spx Display help message in sphinx format.
     * @param help_txt Display help message in simple text.
     * @param help Display help message in simple text.
     * @param show_allowed_options List of allowed options.
     * @param verbosity_level Verbosity level. 0 for quiet (Default). 1 or more: talkative.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dRprogDemoOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_RPROG_DEMO_METADATA);
    const params = v_3d_rprog_demo_params(input_dsets, scale, prefix, mask, help_aspx, help_raw, help_spx, help_txt, help, show_allowed_options, verbosity_level)
    return v_3d_rprog_demo_execute(params, execution);
}


export {
      V3dRprogDemoOutputs,
      V3dRprogDemoParameters,
      V_3D_RPROG_DEMO_METADATA,
      v_3d_rprog_demo,
      v_3d_rprog_demo_params,
};
