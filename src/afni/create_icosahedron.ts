// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CREATE_ICOSAHEDRON_METADATA: Metadata = {
    id: "0c5ed33e6d9371f02ee960933e1903bb9350e470.boutiques",
    name: "CreateIcosahedron",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface CreateIcosahedronParameters {
    "__STYXTYPE__": "CreateIcosahedron";
    "rad"?: number | null | undefined;
    "rec_depth"?: number | null | undefined;
    "lin_depth"?: number | null | undefined;
    "min_nodes"?: number | null | undefined;
    "nums": boolean;
    "nums_quiet": boolean;
    "center_coordinates"?: Array<number> | null | undefined;
    "to_sphere": boolean;
    "output_prefix"?: string | null | undefined;
    "help": boolean;
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
        "CreateIcosahedron": create_icosahedron_cargs,
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
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `create_icosahedron(...)`.
 *
 * @interface
 */
interface CreateIcosahedronOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function create_icosahedron_params(
    rad: number | null = null,
    rec_depth: number | null = null,
    lin_depth: number | null = null,
    min_nodes: number | null = null,
    nums: boolean = false,
    nums_quiet: boolean = false,
    center_coordinates: Array<number> | null = null,
    to_sphere: boolean = false,
    output_prefix: string | null = null,
    help: boolean = false,
): CreateIcosahedronParameters {
    /**
     * Build parameters.
    
     * @param rad Size of icosahedron.
     * @param rec_depth Recursive tessellation depth for icosahedron.
     * @param lin_depth Number of edge divides for linear icosahedron tessellation.
     * @param min_nodes Automatically select the -ld value which produces an icosahedron of at least MIN_NODES nodes.
     * @param nums Output the number of nodes (vertices), triangles, edges, total volume, and total area then quit.
     * @param nums_quiet Output numbers in a less verbose manner.
     * @param center_coordinates Coordinates of the center of the icosahedron.
     * @param to_sphere Project nodes to sphere.
     * @param output_prefix Prefix for output files.
     * @param help Display help message.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "CreateIcosahedron" as const,
        "nums": nums,
        "nums_quiet": nums_quiet,
        "to_sphere": to_sphere,
        "help": help,
    };
    if (rad !== null) {
        params["rad"] = rad;
    }
    if (rec_depth !== null) {
        params["rec_depth"] = rec_depth;
    }
    if (lin_depth !== null) {
        params["lin_depth"] = lin_depth;
    }
    if (min_nodes !== null) {
        params["min_nodes"] = min_nodes;
    }
    if (center_coordinates !== null) {
        params["center_coordinates"] = center_coordinates;
    }
    if (output_prefix !== null) {
        params["output_prefix"] = output_prefix;
    }
    return params;
}


function create_icosahedron_cargs(
    params: CreateIcosahedronParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("CreateIcosahedron");
    if ((params["rad"] ?? null) !== null) {
        cargs.push(
            "-rad",
            String((params["rad"] ?? null))
        );
    }
    if ((params["rec_depth"] ?? null) !== null) {
        cargs.push(
            "-rd",
            String((params["rec_depth"] ?? null))
        );
    }
    if ((params["lin_depth"] ?? null) !== null) {
        cargs.push(
            "-ld",
            String((params["lin_depth"] ?? null))
        );
    }
    if ((params["min_nodes"] ?? null) !== null) {
        cargs.push(
            "-min_nodes",
            String((params["min_nodes"] ?? null))
        );
    }
    if ((params["nums"] ?? null)) {
        cargs.push("-nums");
    }
    if ((params["nums_quiet"] ?? null)) {
        cargs.push("-nums_quiet");
    }
    if ((params["center_coordinates"] ?? null) !== null) {
        cargs.push(
            "-ctr",
            ...(params["center_coordinates"] ?? null).map(String)
        );
    }
    if ((params["to_sphere"] ?? null)) {
        cargs.push("-tosphere");
    }
    if ((params["output_prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["output_prefix"] ?? null)
        );
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    return cargs;
}


function create_icosahedron_outputs(
    params: CreateIcosahedronParameters,
    execution: Execution,
): CreateIcosahedronOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: CreateIcosahedronOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function create_icosahedron_execute(
    params: CreateIcosahedronParameters,
    execution: Execution,
): CreateIcosahedronOutputs {
    /**
     * Tool to create an icosahedron with optional tessellation.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `CreateIcosahedronOutputs`).
     */
    params = execution.params(params)
    const cargs = create_icosahedron_cargs(params, execution)
    const ret = create_icosahedron_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function create_icosahedron(
    rad: number | null = null,
    rec_depth: number | null = null,
    lin_depth: number | null = null,
    min_nodes: number | null = null,
    nums: boolean = false,
    nums_quiet: boolean = false,
    center_coordinates: Array<number> | null = null,
    to_sphere: boolean = false,
    output_prefix: string | null = null,
    help: boolean = false,
    runner: Runner | null = null,
): CreateIcosahedronOutputs {
    /**
     * Tool to create an icosahedron with optional tessellation.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param rad Size of icosahedron.
     * @param rec_depth Recursive tessellation depth for icosahedron.
     * @param lin_depth Number of edge divides for linear icosahedron tessellation.
     * @param min_nodes Automatically select the -ld value which produces an icosahedron of at least MIN_NODES nodes.
     * @param nums Output the number of nodes (vertices), triangles, edges, total volume, and total area then quit.
     * @param nums_quiet Output numbers in a less verbose manner.
     * @param center_coordinates Coordinates of the center of the icosahedron.
     * @param to_sphere Project nodes to sphere.
     * @param output_prefix Prefix for output files.
     * @param help Display help message.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `CreateIcosahedronOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CREATE_ICOSAHEDRON_METADATA);
    const params = create_icosahedron_params(rad, rec_depth, lin_depth, min_nodes, nums, nums_quiet, center_coordinates, to_sphere, output_prefix, help)
    return create_icosahedron_execute(params, execution);
}


export {
      CREATE_ICOSAHEDRON_METADATA,
      CreateIcosahedronOutputs,
      CreateIcosahedronParameters,
      create_icosahedron,
      create_icosahedron_params,
};
