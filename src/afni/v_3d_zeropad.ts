// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_ZEROPAD_METADATA: Metadata = {
    id: "8becb29cf5d687af1a0c52c165ec0b440d32f49e.boutiques",
    name: "3dZeropad",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dZeropadParameters {
    "__STYXTYPE__": "3dZeropad";
    "dataset": InputPathType;
    "I"?: number | null | undefined;
    "S"?: number | null | undefined;
    "A"?: number | null | undefined;
    "P"?: number | null | undefined;
    "L"?: number | null | undefined;
    "R"?: number | null | undefined;
    "z"?: number | null | undefined;
    "RL"?: number | null | undefined;
    "AP"?: number | null | undefined;
    "IS"?: number | null | undefined;
    "pad2even": boolean;
    "mm_flag": boolean;
    "master_dataset"?: InputPathType | null | undefined;
    "prefix"?: string | null | undefined;
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
        "3dZeropad": v_3d_zeropad_cargs,
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
        "3dZeropad": v_3d_zeropad_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_zeropad(...)`.
 *
 * @interface
 */
interface V3dZeropadOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output dataset (BRIK format)
     */
    output_dataset_brik: OutputPathType | null;
    /**
     * Output dataset (HEAD format)
     */
    output_dataset_head: OutputPathType | null;
}


function v_3d_zeropad_params(
    dataset: InputPathType,
    i: number | null = null,
    s: number | null = null,
    a: number | null = null,
    p: number | null = null,
    l: number | null = null,
    r: number | null = null,
    z: number | null = null,
    rl: number | null = null,
    ap: number | null = null,
    is: number | null = null,
    pad2even: boolean = false,
    mm_flag: boolean = false,
    master_dataset: InputPathType | null = null,
    prefix: string | null = null,
): V3dZeropadParameters {
    /**
     * Build parameters.
    
     * @param dataset Input dataset
     * @param i Adds 'n' planes of zero at the Inferior edge
     * @param s Adds 'n' planes of zero at the Superior edge
     * @param a Adds 'n' planes of zero at the Anterior edge
     * @param p Adds 'n' planes of zero at the Posterior edge
     * @param l Adds 'n' planes of zero at the Left edge
     * @param r Adds 'n' planes of zero at the Right edge
     * @param z Adds 'n' planes of zeros on EACH of the dataset z-axis (slice-direction) faces
     * @param rl Add/cut planes symmetrically to make the resulting volume have 'a' slices in the Right/Left direction
     * @param ap Add/cut planes symmetrically to make the resulting volume have 'b' slices in the Anterior/Posterior direction
     * @param is Add/cut planes symmetrically to make the resulting volume have 'c' slices in the Inferior/Superior direction
     * @param pad2even Add 0 or 1 plane in each of the R/A/S directions, giving each axis an even number of slices
     * @param mm_flag Pad counts 'n' are in mm instead of slices.
     * @param master_dataset Match the volume described in dataset 'mset'. 'mset' must have the same orientation and grid spacing as dataset to be padded.
     * @param prefix Write result into dataset with prefix 'ppp'. Default is 'zeropad'.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dZeropad" as const,
        "dataset": dataset,
        "pad2even": pad2even,
        "mm_flag": mm_flag,
    };
    if (i !== null) {
        params["I"] = i;
    }
    if (s !== null) {
        params["S"] = s;
    }
    if (a !== null) {
        params["A"] = a;
    }
    if (p !== null) {
        params["P"] = p;
    }
    if (l !== null) {
        params["L"] = l;
    }
    if (r !== null) {
        params["R"] = r;
    }
    if (z !== null) {
        params["z"] = z;
    }
    if (rl !== null) {
        params["RL"] = rl;
    }
    if (ap !== null) {
        params["AP"] = ap;
    }
    if (is !== null) {
        params["IS"] = is;
    }
    if (master_dataset !== null) {
        params["master_dataset"] = master_dataset;
    }
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    return params;
}


function v_3d_zeropad_cargs(
    params: V3dZeropadParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dZeropad");
    cargs.push(execution.inputFile((params["dataset"] ?? null)));
    if ((params["I"] ?? null) !== null) {
        cargs.push(
            "-I",
            String((params["I"] ?? null))
        );
    }
    if ((params["S"] ?? null) !== null) {
        cargs.push(
            "-S",
            String((params["S"] ?? null))
        );
    }
    if ((params["A"] ?? null) !== null) {
        cargs.push(
            "-A",
            String((params["A"] ?? null))
        );
    }
    if ((params["P"] ?? null) !== null) {
        cargs.push(
            "-P",
            String((params["P"] ?? null))
        );
    }
    if ((params["L"] ?? null) !== null) {
        cargs.push(
            "-L",
            String((params["L"] ?? null))
        );
    }
    if ((params["R"] ?? null) !== null) {
        cargs.push(
            "-R",
            String((params["R"] ?? null))
        );
    }
    if ((params["z"] ?? null) !== null) {
        cargs.push(
            "-z",
            String((params["z"] ?? null))
        );
    }
    if ((params["RL"] ?? null) !== null) {
        cargs.push(
            "-RL",
            String((params["RL"] ?? null))
        );
    }
    if ((params["AP"] ?? null) !== null) {
        cargs.push(
            "-AP",
            String((params["AP"] ?? null))
        );
    }
    if ((params["IS"] ?? null) !== null) {
        cargs.push(
            "-IS",
            String((params["IS"] ?? null))
        );
    }
    if ((params["pad2even"] ?? null)) {
        cargs.push("-pad2evens");
    }
    if ((params["mm_flag"] ?? null)) {
        cargs.push("-mm");
    }
    if ((params["master_dataset"] ?? null) !== null) {
        cargs.push(
            "-master",
            execution.inputFile((params["master_dataset"] ?? null))
        );
    }
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    return cargs;
}


function v_3d_zeropad_outputs(
    params: V3dZeropadParameters,
    execution: Execution,
): V3dZeropadOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dZeropadOutputs = {
        root: execution.outputFile("."),
        output_dataset_brik: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), "+orig.BRIK"].join('')) : null,
        output_dataset_head: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), "+orig.HEAD"].join('')) : null,
    };
    return ret;
}


function v_3d_zeropad_execute(
    params: V3dZeropadParameters,
    execution: Execution,
): V3dZeropadOutputs {
    /**
     * Adds planes of zeros to a dataset (i.e., pads it out). Negative 'add' count means to cut a dataset down in size.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dZeropadOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_zeropad_cargs(params, execution)
    const ret = v_3d_zeropad_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_zeropad(
    dataset: InputPathType,
    i: number | null = null,
    s: number | null = null,
    a: number | null = null,
    p: number | null = null,
    l: number | null = null,
    r: number | null = null,
    z: number | null = null,
    rl: number | null = null,
    ap: number | null = null,
    is: number | null = null,
    pad2even: boolean = false,
    mm_flag: boolean = false,
    master_dataset: InputPathType | null = null,
    prefix: string | null = null,
    runner: Runner | null = null,
): V3dZeropadOutputs {
    /**
     * Adds planes of zeros to a dataset (i.e., pads it out). Negative 'add' count means to cut a dataset down in size.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param dataset Input dataset
     * @param i Adds 'n' planes of zero at the Inferior edge
     * @param s Adds 'n' planes of zero at the Superior edge
     * @param a Adds 'n' planes of zero at the Anterior edge
     * @param p Adds 'n' planes of zero at the Posterior edge
     * @param l Adds 'n' planes of zero at the Left edge
     * @param r Adds 'n' planes of zero at the Right edge
     * @param z Adds 'n' planes of zeros on EACH of the dataset z-axis (slice-direction) faces
     * @param rl Add/cut planes symmetrically to make the resulting volume have 'a' slices in the Right/Left direction
     * @param ap Add/cut planes symmetrically to make the resulting volume have 'b' slices in the Anterior/Posterior direction
     * @param is Add/cut planes symmetrically to make the resulting volume have 'c' slices in the Inferior/Superior direction
     * @param pad2even Add 0 or 1 plane in each of the R/A/S directions, giving each axis an even number of slices
     * @param mm_flag Pad counts 'n' are in mm instead of slices.
     * @param master_dataset Match the volume described in dataset 'mset'. 'mset' must have the same orientation and grid spacing as dataset to be padded.
     * @param prefix Write result into dataset with prefix 'ppp'. Default is 'zeropad'.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dZeropadOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_ZEROPAD_METADATA);
    const params = v_3d_zeropad_params(dataset, i, s, a, p, l, r, z, rl, ap, is, pad2even, mm_flag, master_dataset, prefix)
    return v_3d_zeropad_execute(params, execution);
}


export {
      V3dZeropadOutputs,
      V3dZeropadParameters,
      V_3D_ZEROPAD_METADATA,
      v_3d_zeropad,
      v_3d_zeropad_params,
};
